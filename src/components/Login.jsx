import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { setUserSeesionDetails } from "../store/scheduler/actions";

const Login = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  let path = useLocation().pathname;

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
    const prevPath = sessionStorage.getItem("prevLocation");
    sessionStorage.setItem(
      "userProfile",
      res.profileObj.email || sessionStorage.getItem("userProfile")
    );
    dispatch(setUserSeesionDetails(res.profileObj));
    if (path === "/login" && sessionStorage.getItem("userProfile") !== null)
      navigate(prevPath);
  };

  const onFailure = (err) => {
    sessionStorage.setItem("userProfile", null);
    console.log("failed", err);
  };
  return (
    <Container className="container-scheduler padding-login">
      <div className="loginButton">
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign in</h3>

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
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
