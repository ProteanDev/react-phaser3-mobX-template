import { types, Instance } from "mobx-state-tree"
import { ModifierMST } from "./Modifier"
import { Guid } from "guid-typescript"
import { getCharacterActions } from '../actions'
import BaseModel from './BaseModel'
import Modifier from './Modifier'
import Move from './Move'

const generatedID = Guid.create().toString()

export const CharacterMST = types.model("Character", {
  id: types.optional(types.identifier, generatedID),
  level: types.optional(types.number, 0),
  damage: types.optional(types.number, 0),
  defense: types.optional(types.number, 0),
  indestructable: types.optional(types.boolean, false),
  hitPoints: types.optional(types.number, 100),
  modifiers: types.optional(types.array(types.string), []),
  moves: types.optional(types.array(types.string), [])
}).actions(self => getCharacterActions(self))

export interface ICharacter extends Instance<typeof CharacterMST> { }

export default class Character extends BaseModel implements ICharacter {
  id = generatedID
  hitPoints = 100
  indestructable = false
  level = 0
  damage = 0
  defense = 0
  modifiers: string[] = []
  moves: string[] = []
}