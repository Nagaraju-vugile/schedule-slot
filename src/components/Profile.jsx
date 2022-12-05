import React, { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Row } from "reactstrap";

import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

const Profile = () => {
  const navigate = useNavigate();
  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );

  const storedUser = sessionStorage.getItem("userProfile");
  useEffect(() => {
    if (storedUser === "null" || storedUser === null) {
      navigate("/login");
    }
  });
  return (
    <div className="layout-main">
      <Header />
      <NavBar />
      <Row>
        <h4 className="appointments"> Personal information </h4>
      </Row>
      <Row
        className="appointments"
        style={{ minHeight: "150px", margin: "10px" }}
      >
        <Card className="my-2 card-border" style={{ justifyContent: "center" }}>
          <CardHeader className="card-header"></CardHeader>
          <CardBody className="padding-top-style">
            <div className="avatar appointments">
              <BsFillPersonFill className="avatar" />
            </div>
            <div className="appointments">{userProfile?.name}</div>
            <div className="appointments">{userProfile?.email}</div>
            <div className="appointments">{userProfile?.givenName}</div>
            <div className="appointments">{userProfile?.familyName}</div>
          </CardBody>
          <CardFooter className="card-header"></CardFooter>
        </Card>
      </Row>
      <Footer />
    </div>
  );
};

export default Profile;
