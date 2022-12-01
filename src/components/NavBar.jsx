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

  

  const [currentActiveTab, setCurrentActiveTab] = useState(activeTab);
  return (
    <Container className="container-scheduler">
      <Row className="style-padding-bottom">
        <Nav tabs>
          {/* <NavItem>
            <NavLink
              className={currentActiveTab === "1" ? "active" : ""}
              href="/"
              onClick={() => setCurrentActiveTab("1")}
              disabled={currentActiveTab === "1"}
            >
              Home
            </NavLink>
          </NavItem> */}
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
      </Row>
    </Container>
  );
};

export default NavBar;
