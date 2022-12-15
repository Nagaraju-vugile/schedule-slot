import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AiFillHome, AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink, Nav, NavItem
} from "reactstrap";
import { messages } from "../constants";
import {
  clearUserSessionDetails,
  selectedProfileOption,
  setActiveTab,
  setUserSeesionDetails
} from "../store/scheduler/actions";
import ReactRoundedImage from "react-rounded-image";
import { BsFillPersonFill } from "react-icons/bs";

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
    const pyImageUrl = userProfile &&userProfile?.imageUrl;

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
    dispatch(selectedProfileOption("Settings"));
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

  useEffect(() => {
   if(path==="/my-bookings"){
    dispatch(setActiveTab("2"));
   } else if(path==="/schedulers-list" || path==="/"){
    dispatch(setActiveTab("1"));
   }
  },[path, dispatch]);

  return (
    <div className="header">
      <div className="loginButton">
        {profile ? (
          <>
            <Nav className="header-nav">
              <NavItem>
                <NavLink href="#" onClick={() => handleHome()}>
                  <AiFillHome
                    style={{ marginBottom: "4px", marginRight: "6px" }}
                  />
                  {messages.buttons.home}
                </NavLink>
              </NavItem>
              <Dropdown
                nav
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={(!dropdownOpen && "down") || "up"}
              >
                <DropdownToggle nav caret>
                  <AiFillSetting
                    style={{ marginBottom: "4px", marginRight: "6px" }}
                  />
                  {selectedOption}
                </DropdownToggle>
                <DropdownMenu style={{ width: "100%", }}>
                  <DropdownItem className = "profile-dropdown-item" onClick={() => handleProfile()} style={{
                        display: "flex",
                      }}>
                  <span
                    >
                      {(pyImageUrl && (
                        <ReactRoundedImage
                          image={pyImageUrl}
                          roundedColor="none"
                          imageWidth="30"
                          imageHeight="30"
                          roundedSize="2"
                          borderRadius="20"
                        />
                      )) || <BsFillPersonFill className="avatar-profile" />}
                    </span>
                    <span style={{ paddingLeft: "11px" }}>
                      {messages.buttons.profile}
                    </span>
                  </DropdownItem>
                  <DropdownItem onClick={() => handleLogout()}>
                    <AiOutlineLogout />
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
            </Nav>
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
