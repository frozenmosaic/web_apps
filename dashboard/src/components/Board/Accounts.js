import React from "react";
import { Table } from "reactstrap";
import { ACCOUNTS } from "../../shared/accounts";

function Accounts(props) {
  const tableBody = ACCOUNTS.map((account) => {
    return (
      <tr>
        <td>{account.act}</td>
        <td>{account.amt}</td>
      </tr>
    );
  });

  return (
    <Table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th>Account</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </Table>
  );
}

export default Accounts;
