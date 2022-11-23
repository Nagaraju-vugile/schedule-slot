import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row, Container } from "reactstrap";
import Login from "./Login";

const Home = () => {
  const navigate = useNavigate();
  const handleDoctorsList = () => {
    navigate("/doctors-list");
  };

  const handleMyBookings = () => {
    navigate("/my-bookings");
  };
  
  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );

  const storedUser = sessionStorage.getItem('userProfile');
  useEffect(() => {
    if (!userProfile && storedUser ==='null') {
      navigate("/login");
    }
});
  return (
    <Container className="container-scheduler">
      <Login />
      <Row>
        <Col>
          <h3>Select category</h3>
        </Col>
      </Row>
      <Row>
        <Col xs="4">
          <Button color="primary" onClick={() => handleDoctorsList()}>
            Scheduler types
          </Button>
        </Col>
        <Col xs="4">
          <Button color="primary" onClick={() => handleMyBookings()}>
            My bookings
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
