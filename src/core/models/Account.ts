import { types, Instance, IModelType } from "mobx-state-tree"
import { Guid } from "guid-typescript"
import BaseModel from './BaseModel'

const generatedID = Guid.create().toString()

export const AccountMST = types.model("Account", {
  id: types.optional(types.identifier, generatedID),
  balance: types.optional(types.number, 0),
  firstname: types.optional(types.string, ""),
  middlename: types.optional(types.string, ""),
  lastname: types.optional(types.string, ""),
  username: types.optional(types.string, ""),
  password: types.optional(types.string, "")
})

export interface IAccount extends Instance<typeof AccountMST> { }

export default class Account extends BaseModel implements IAccount {
  id = generatedID
  balance = 0
  firstname = ""
  middlename = ""
  lastname = ""
  username = ""
  password = ""
}