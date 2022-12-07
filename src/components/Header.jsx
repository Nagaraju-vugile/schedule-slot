import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle
} from "reactstrap";
import {
  clearUserSessionDetails,
  selectedProfileOption,
  setActiveTab,
  setUserSeesionDetails
} from "../store/scheduler/actions";

export default function Header() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let path = useLocation().pathname;
  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );
  const selectedOption = useSelector(
    (state) => state?.availabilitiesReducer?.selectedProfileOption
  );
  const [profile, setProfile] = useState(userProfile);
  const clientId =
    "192710840478-c1g1e51uv068erlttvl9o91fcku82d6u.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    sessionStorage.setItem("userProfile", res.profileObj.email);
    dispatch(setUserSeesionDetails(res.profileObj));
    if (path === "/login") navigate("/");
  };

  const handleHome = () => {
    dispatch(setActiveTab("1"));
    navigate("/schedulers-list");
  };

  const handleProfile = () => {
    dispatch(selectedProfileOption("Profile"));
    navigate("/scheduler/profile");
  };

  const handleLogout = () => {
    dispatch(selectedProfileOption("Logout"));
  };

  const onFailure = (err) => {
    sessionStorage.setItem("userProfile", null);
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(null);
    sessionStorage.setItem("userProfile", null);
    dispatch(clearUserSessionDetails());
    navigate("/login");
  };
  return (
    <div className="header">
      <div className="loginButton">
        {profile ? (
          <>
            <Button
              color="link"
              className="home-button"
              onClick={() => handleHome()}
            >
              <AiFillHome style={{ marginBottom: "3px", marginRight: "3px" }} />
              Home
            </Button>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={(!dropdownOpen && "down") || "up"}
            >
              <DropdownToggle
                caret
                style={{ borderRadius: "0px" }}
                className="profile-dropdown"
              >
                <AiFillSetting style={{ marginBottom: "3px", marginRight: "3px" }}/>
                {selectedOption}
              </DropdownToggle>
              <DropdownMenu style={{ width: "100%" }}>
                <DropdownItem onClick={() => handleProfile()}>
                  <span style={{paddingLeft:"11px"}}>Profile</span>
                </DropdownItem>
                <DropdownItem onClick={() => handleLogout()}>
                  <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign out"
                    onLogoutSuccess={logOut}
                    className="logout-btn"
                    icon={false}
                  />
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        )}
      </div>
    </div>
  );
}
