
import { gapi } from 'gapi-script';
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { clearUserSessionDetails, setActiveTab, setUserSeesionDetails } from '../store/scheduler/actions';

export default function Header() {
    const navigate = useNavigate();
    let dispatch = useDispatch();
   
    let path = useLocation().pathname;
    const userProfile = useSelector(
      (state) => state?.availabilitiesReducer?.userProfile
    );
    const [ profile, setProfile ] = useState(userProfile);
    const clientId = '192710840478-c1g1e51uv068erlttvl9o91fcku82d6u.apps.googleusercontent.com';
  
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
    sessionStorage.setItem('userProfile', res.profileObj.email);
    dispatch(setUserSeesionDetails(res.profileObj));
    if(path === '/login')
    navigate("/");
  };
  
  const handleHome=()=>{
    dispatch(setActiveTab("1"));
    navigate("/schedulers-list");
  }
  
  const onFailure = (err) => {
    sessionStorage.setItem('userProfile', null);
    console.log('failed', err);
  };
  
  const logOut = () => {
    setProfile(null);
    sessionStorage.setItem('userProfile', null);
    dispatch(clearUserSessionDetails());
    navigate("/login");
  }
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
              Home
            </Button>
            <GoogleLogout
              clientId={clientId}
              buttonText="Log out"
              onLogoutSuccess={logOut}
              className="logout-btn"
            />
          </>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
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