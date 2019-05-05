import Account, { AccountMST } from '../models/Account'

it("Account Model Test", () => {
  const accountTS = { ...(new Account()) }
  const accountMST = AccountMST.create(accountTS)
})