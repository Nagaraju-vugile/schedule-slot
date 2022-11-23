import { gapi } from 'gapi-script';
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { clearUserSessionDetails, setUserSeesionDetails } from '../store/scheduler/actions';
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row, Container } from "reactstrap";


const Login = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
 
  let path = useLocation().pathname;
  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );
  const [ profile, setProfile ] = useState(userProfile);
  const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';

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
  sessionStorage.setItem('userProfile', res.profileObj.email);
  dispatch(setUserSeesionDetails(res.profileObj));
  if(path === '/login')
  navigate("/");
};

const handleHome=()=>{
  navigate("/");
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
    <div className='loginButton'>
      {profile ? (
        <><Button color="link" className='home-button' onClick={()=>handleHome()}>Home</Button><GoogleLogout
          clientId={clientId}
          buttonText="Log out"
          onLogoutSuccess={logOut} /></>
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
    </Container>
  );
};

export default Login;
