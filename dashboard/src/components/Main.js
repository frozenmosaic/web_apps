import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "./Header";
import Metadata from "./Board/Metadata";
import Charts from "./Board/Charts";
import Accounts from "./Board/Accounts";
import Tracking from "./Board/Tracking";

function Main(props) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Account #1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Account #2
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="ml-sm-auto col-lg-10 pt-3 px-4">
            <Container className="section">
              <Row className="">
                <Accounts />
              </Row>
            </Container>
            <hr />
            <Container className="section">
              <Row className="row">
                <Col className="border border-primary">
                  <Charts />
                </Col>
                <Col className="border border-primary">
                  <Tracking />
                </Col>
              </Row>
            </Container>
          </main>
        </div>
      </div>
    </>
  );
}

export default Main;
