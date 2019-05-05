import { types, Instance } from "mobx-state-tree"
import { Guid } from "guid-typescript"
import { getModifierActions } from '../actions'
import BaseModel from './BaseModel'

const generatedID = Guid.create().toString()

export const ModifierMST = types.model("Modifier", {
  id: types.optional(types.identifier, generatedID),
  level: types.optional(types.number, 0), // Can be negative or positive numbers to add or minus on stats
  damage: types.optional(types.number, 0), // Can be negative or positive numbers to add or minus on stats
  defense: types.optional(types.number, 0) // Can be negative or positive numbers to add or minus on stats
}).actions(self => getModifierActions(self))

export interface IModifier extends Instance<typeof ModifierMST> { }

export default class Modifier extends BaseModel implements IModifier {
  id = generatedID
  level = 0
  damage = 0
  defense = 0
}
