import React from "react";
import { Table, Container, Row, Progress } from "reactstrap";
import { ACCOUNTS } from "../../shared/accounts";

function Tracking(props) {
  return (
      <div>
        <div className="text-center">50%</div>
        <Progress value="50" />
      </div>
  );
}

export default Tracking;