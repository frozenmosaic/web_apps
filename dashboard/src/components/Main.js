import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "./Header";
import Charts from "./Board/Charts";
import Accounts from "./Board/Accounts";
import Tracking from "./Board/Tracking";
import { connect } from "react-redux";
import { Component } from "react";
import { addAlloc } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
  };
};

const mapDispatchToProps = dispatch => ({
  addAlloc: (id, alloc) => dispatch(addAlloc(id, alloc))
})

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log('componentDidMount');
  }

  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            {/* <nav className="col-md-2 d-none d-md-block bg-light sidebar">
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
            </nav> */}

            <main className="ml-sm-auto col-lg-12 pt-3 px-4">
              <Container className="section">
                <Row className="">
                  <Accounts accounts={this.props.accounts} addAlloc={this.props.addAlloc}/>
                </Row>
              </Container>
              {/* <hr />
              <Container className="section">
                <Row className="row">
                  <Col className="border border-primary">
                    <Charts />
                  </Col>
                  <Col className="border border-primary">
                    <Tracking />
                  </Col>
                </Row>
              </Container> */}
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));
