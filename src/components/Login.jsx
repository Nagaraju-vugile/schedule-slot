import { gapi } from 'gapi-script';
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";
import { clearUserSessionDetails, setUserSeesionDetails } from '../store/scheduler/actions';


const Login = () => {
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
    gapi.load('client:auth2', initClient);
});

const onSuccess = (res) => {
  setProfile(res.profileObj);
  sessionStorage.setItem('userProfile', res.profileObj.email || sessionStorage.getItem('userProfile'));
  dispatch(setUserSeesionDetails(res.profileObj));
  if(path === '/login' && sessionStorage.getItem('userProfile') !== null)
  navigate("/");
};

const handleHome=()=>{
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
    <Container className="container-scheduler padding-login">
      <div className="loginButton">
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign in</h3>
          {/* <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div> */}
          {/* <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div> */}
          <div className="d-grid gap-2 mt-3">
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            className="login-btn"
          />
            {/* <button type="submit" className="btn btn-primary">
              Submit
            </button> */}
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
        {/* {profile ? (
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
        )} */}
      </div>
    </Container>
  );
};

export default Login;
