import React from "react";
import { CardBody, CardTitle, Card } from "reactstrap";

function Content(props) {
  return (
    <div className="section border border-primary">
      <div className="container-fluid">
        <div className="row">
          <div className="panel col border">Left
          </div>
          <div className="panel col-9 border">
              
              <div className="row border top justify-content-center">
                  Top
              </div>
              <div className="row border top justify-content-center">
                  Bottom
              </div>
          </div>
          {/* <div class="half">
          <h4>Top left</h4>
        </div>
        <div class="half">
          <h4>Bottom left</h4>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Content;
