import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { setActiveTab } from "../store/scheduler/actions";
import Header from "./Header";
import NavBar from "./NavBar";

const Home = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const handleDoctorsList = () => {
    navigate("/schedulers-list");
  };

  const storedUser = sessionStorage.getItem("userProfile");
  useEffect(() => {
    if (storedUser === "null" || storedUser === null) {
      navigate("/login");
    }
  });

  useEffect(() => {
    dispatch(setActiveTab("1"));
  }, [dispatch]);
  return (
    <>
      <Header />
      <Container className="container-scheduler">
        <NavBar />
        <Row>
          <Col>
            <h4>Scheduler</h4>
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="make-an-appointment">
            <Button color="primary" onClick={() => handleDoctorsList()}>
              Make an appointment
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
