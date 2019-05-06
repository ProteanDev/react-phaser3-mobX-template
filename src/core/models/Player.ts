import { types, Instance } from "mobx-state-tree"
import { Guid } from "guid-typescript"
import BaseModel from './BaseModel'

const generatedID = Guid.create().toString())

export const PlayerMST = types.model("Player", {
  id: types.optional(types.identifier, generatedID)
  characters: types.optional(types.array(types.string), []),
})

export interface IPlayer extends Instance<typeof PlayerMST> { }

export default class Player extends BaseModel {
  id = generatedID
  characters: string[] = []
}