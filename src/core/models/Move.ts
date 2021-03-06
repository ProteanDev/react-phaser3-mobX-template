import { types, Instance } from "mobx-state-tree"
import Modifier, { ModifierMST } from "./Modifier"
import { Guid } from "guid-typescript"
import BaseModel from './BaseModel'

const generatedID = Guid.create().toString()

export const MoveMST = types.model("Move", {
  id: types.optional(types.identifier, generatedID),
  cooldown: types.optional(types.number, 0),
  modifiers: types.optional(types.array(types.string), []),
  isReaction: types.optional(types.boolean, false)
})

export interface IMove extends Instance<typeof MoveMST> { }

export default class Move extends BaseModel {
  id = generatedID
  cooldown = 0
  modifiers: string[] = []
  isReaction = false
}
