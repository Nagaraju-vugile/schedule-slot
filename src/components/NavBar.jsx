import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import { messages } from "../constants";

const NavBar = () => {
  let path = useLocation().pathname;
  const [currentActiveTab, setCurrentActiveTab] = useState(path==='/my-bookings'?"2":"1");
  return (
    <Container className="container-scheduler">
      <Row className="style-padding-bottom">
        <Nav>
          <NavItem>
            <NavLink
              className={currentActiveTab === "1" ? "active" : ""}
              href="/schedulers-list"
              onClick={() => setCurrentActiveTab("1")}
              disabled={currentActiveTab === "1"}
            >
              {messages.nav.scheduler}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={currentActiveTab === "2" ? "active" : ""}
              href="/my-bookings"
              onClick={() => setCurrentActiveTab("2")}
              disabled={currentActiveTab === "2"}
            >
              {messages.nav.myBookigs}
            </NavLink>
          </NavItem>
        </Nav>
      </Row>
    </Container>
  );
};

export default NavBar;
