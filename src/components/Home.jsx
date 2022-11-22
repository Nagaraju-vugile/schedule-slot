import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const Home = () => {
  const navigate = useNavigate();
  const handleDoctorsList = ()=>{
    navigate("/doctors-list");
  }
  return (
    <div className="content">
      {/* <Container> */}
        <Row>
          <Col>
          <h3>Select category</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" onClick={()=>handleDoctorsList()}> Doctors list</Button>
          </Col>
        </Row>
      {/* </Container> */}
    </div>
  );
};

export default Home;
