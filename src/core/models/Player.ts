import { types, Instance } from "mobx-state-tree"
import { Guid } from "guid-typescript"
import { getPlayerActions } from '../actions'
import BaseModel from './BaseModel'

const generatedID = Guid.create().toString())

export const PlayerMST = types.model("Player", {
  id: types.optional(types.identifier, generatedID)
  characters: types.optional(types.array(types.string), []),
}).actions(self => getPlayerActions(self))

export interface IPlayer extends Instance<typeof PlayerMST> { }

export default class Player extends BaseModel implements IPlayer {
  id = generatedID
  characters: string[] = []
}