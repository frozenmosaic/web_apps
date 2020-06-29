import React, { Component } from "react";
import { Table, Modal, ModalBody } from "reactstrap";
import calc from "../../logic/Calc";

class Accounts extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.props.addAlloc(event.target.id, event.target.value);
    }
  }

  render() {
    const tableBody = this.props.accounts.map((acct) => {
      return (
        <tr key={acct.id}>
          <td>{acct.act}</td>
          <td>{acct.amt}</td>
          <td>{acct.alloc}</td>
          <td>
            <div class="input-group">
              <input
                type="number"
                id={acct.id}
                name="alloc"
                onKeyDown={this.handleKeyPress}
              />
            </div>
          </td>
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
              <th>Total Alloc.</th>
              <th>Planned Alloc.</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </Table>
      </>
    );
  }
}

export default Accounts;
