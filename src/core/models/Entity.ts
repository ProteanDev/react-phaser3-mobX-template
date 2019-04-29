import { types, Instance } from "mobx-state-tree"
import Stats from "./Stats"
import { Guid } from "guid-typescript"
import { getEntityActions } from '../actions'

const generatedID = Guid.create().toString())

export const EntityMST = types.model("Entity", {
  id: types.optional(types.identifier, generatedID),
  level: types.optional(types.number, 0),
  damage: types.optional(types.number, 0),
  defense: types.optional(types.number, 0),
  indestructable: types.optional(types.boolean, false)
}).actions(self => getEntityActions(self))

export interface IEntity extends Instance<typeof EntityMST> { }

export default class Entity extends Stats {
  id: string = generatedID
  indestructable: boolean = false
}
