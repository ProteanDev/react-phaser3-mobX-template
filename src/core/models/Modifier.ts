import { types, Instance } from "mobx-state-tree"
import Stats from "./Stats"
import { Guid } from "guid-typescript"
import { getModifierActions } from '../actions'

const generatedID = Guid.create().toString())

export const ModifierMST = types.model("Modifier", {
  id: types.optional(types.identifier, generatedID),
  level: types.optional(types.number, 0), // Can be negative or positive numbers to add or minus on stats
  damage: types.optional(types.number, 0), // Can be negative or positive numbers to add or minus on stats
  defense: types.optional(types.number, 0) // Can be negative or positive numbers to add or minus on stats
}).actions(self => getModifierActions(self))

export interface IModifier extends Instance<typeof ModifierMST> { }


export default class Modifier extends Stats {
  id: string = generatedID
}
