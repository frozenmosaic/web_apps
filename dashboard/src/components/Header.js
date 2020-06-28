import React from "react";
import { Row, Col, NavItem} from 'reactstrap';

function Header(props) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yy = String(today.getFullYear());
  today = mm + '/' + dd + '/' + yy;

  var endDate = new Date(2020, 4, 24).toLocaleString().substring(0, 9);

  return (
    <nav class="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0">
      <div class="navbar-brand col-sm-3 col-md-2 mr-0">Dashboard</div>
      <div class="navbar-nav w-100">
        <Row>
          <Col className="col-2">{endDate}</Col>
          <Col className="col-2">{today}</Col>
        </Row>
      </div>
    </nav>
  );
}

export default Header;
