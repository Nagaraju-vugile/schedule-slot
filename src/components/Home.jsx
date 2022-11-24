import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row, Container } from "reactstrap";
import { setActiveTab } from "../store/scheduler/actions";
import Login from "./Login";
import NavBar from "./NavBar";

const Home = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const handleDoctorsList = () => {
    navigate("/schedulers-list");
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

useEffect(() => {
  dispatch(setActiveTab("1"))
}, [dispatch]);
  return (
    <Container className="container-scheduler">
      <Login />
      <NavBar />
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
