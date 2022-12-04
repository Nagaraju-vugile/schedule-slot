import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Col, Row,  Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle, } from "reactstrap";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";


const Profile = () => {
    const userProfile = useSelector(
        (state) => state?.availabilitiesReducer?.userProfile
      );  
  return (
    // <div className="flex-style">
    //   <Row>
    //     <Col xs="12">
    //       <div className="avatar">
    //         <BsFillPersonFill className="avatar" />
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col xs="12">
    //       <div>
    //         <div>{userProfile.name}</div>
    //         <div>{userProfile.email}</div>
    //         <div>{userProfile.givenName}</div>
    //         <div>{userProfile.familyName}</div>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
    <div className="layout-main">
      <Header />
      <NavBar />
      <Row className="appointments" style={{ minHeight: "150px" }}>
        <Card className="my-2 card-border" style={{ justifyContent: "center" }}>
          <CardHeader className="card-header"></CardHeader>
          <CardBody className="padding-top-style">
            <div className="avatar appointments">
              <BsFillPersonFill className="avatar" />
            </div>
            <div className="appointments">{userProfile.name}</div>
            <div className="appointments">{userProfile.email}</div>
            <div className="appointments">{userProfile.givenName}</div>
            <div className="appointments">{userProfile.familyName}</div>
          </CardBody>
          <CardFooter className="card-header"></CardFooter>
        </Card>
      </Row>
      <Footer />
    </div>
  );
};

export default Profile;
