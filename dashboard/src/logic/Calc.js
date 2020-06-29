import { ACCOUNTS } from "../shared/accounts";

export default function calc() {
  return ACCOUNTS.map((acct) => {
    return acct.amt + acct.alloc;
  });
}
