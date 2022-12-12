import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { isSignedIn, setUserSeesionDetails } from "../store/scheduler/actions";
import CookieConsent from "react-cookie-consent";
import { messages } from "../constants";

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
    dispatch(isSignedIn(true));
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
              <h3 className="Auth-form-title">{messages.buttons.signIn}</h3>
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
      <CookieConsent
        location="bottom"
        buttonText="Please accept"
        cookieName="schedulerCoockies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        hideOnAccept
      >
        {messages.cookiesContentMessage}
      </CookieConsent>
    </Container>
  );
};

export default Login;
