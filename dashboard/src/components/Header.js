import React from "react";
import { Row, Col, NavItem } from "reactstrap";

function Header(props) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yy = String(today.getFullYear());
  today = mm + "/" + dd + "/" + yy;

  var endDate = new Date(2020, 4, 24).toLocaleDateString().substring(0, 9);

  return (
    <nav class="navbar navbar-light bg-light p-0">
      <Row className="justify-content-center">
        <Col>
          <div class="navbar-brand p-2">Dashboard</div>
        </Col>
        <Col className="p-2">{endDate}</Col>
        <Col className="p-2">{today}</Col>
      </Row>
    </nav>
  );
}

export default Header;
