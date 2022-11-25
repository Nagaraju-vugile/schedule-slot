import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container, Nav,
  NavItem,
  NavLink, Row
} from "reactstrap";

const NavBar = () => {
  const activeTab = useSelector(
    (state) => state?.availabilitiesReducer?.activeTab
  );

  // const selectedSlotDetails = useSelector(
  //   (state) => state?.availabilitiesReducer?.selectedSlotDetails?.timing?.updatePySelected[0]?.StartTimeText
  // );

  // const location = useSelector(
  //   (state) => state?.availabilitiesReducer?.selectedSlotDetails?.timing?.Location
  // );

  // const date = useSelector(
  //   (state) => state?.availabilitiesReducer?.selectedSlotDetails?.date
  // );

  const [currentActiveTab, setCurrentActiveTab] = useState(activeTab);
  return (
    <Container className="container-scheduler">
      <Row style={{ paddingBottom: "20px" }}>
        {/* <Container className="container-scheduler"> */}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={currentActiveTab === "1" ? "active" : ""}
              href="/schedulers-list"
              onClick={() => setCurrentActiveTab("1")}
              disabled={currentActiveTab === "1"}
            >
              Scheduler
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={currentActiveTab === "2" ? "active" : ""}
              href="/my-bookings"
              onClick={() => setCurrentActiveTab("2")}
              disabled={currentActiveTab === "2"}
            >
              My bookings
            </NavLink>
          </NavItem>
        </Nav>
        {/* <TabContent activeTab={currentActiveTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h5>Sample Tab 1 Content</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h5>Sample Tab 2 Content</h5>
            </Col>
          </Row>
        </TabPane>
      </TabContent> */}
        {/* </Container> */}
      </Row>
    </Container>
  );
};

export default NavBar;
