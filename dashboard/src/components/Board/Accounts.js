import React, { Component } from "react";
import { Table, Modal, ModalBody } from "reactstrap";
import { ACCOUNTS } from "../../shared/accounts";
import calc from "../../logic/Calc";

class Accounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState({
        [name]: value,
      });

      event.preventDefault();
    }
  }

  render() {
    const pv = (pv, ret) => {
      return pv * (1 + ret);
    };

    const tableBody = ACCOUNTS.map((acct) => {
      return (
        <tr>
          <td>{acct.act}</td>
          <td>{acct.amt}</td>
          <td>{acct.alloc}</td>
          <td>{acct.amt + acct.alloc}</td>
          <td>{acct.ret}</td>
          <td>{pv(acct.amt + acct.alloc, acct.ret)}</td>
        </tr>
      );
    });

    return (
      <>
        <Table className="table table-sm table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Account</th>
              <th>Current Value</th>
              <th>Alloc.</th>
              <th>PV</th>
              <th>Return</th>
              <th>FV</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
            <tr>
              <td>{this.state.amount}</td>
            </tr>
          </tbody>
        </Table>
        <div class="input-group col-6">
          <div class="input-group-prepend">
            <span class="input-group-text form-control">$</span>
          </div>
          <input
            type="number"
            class="form-control"
            id="amount"
            name="amount"
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </>
    );
  }
}

export default Accounts;
