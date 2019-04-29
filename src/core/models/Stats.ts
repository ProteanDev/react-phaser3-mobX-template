import { types, Instance } from "mobx-state-tree"
import { Guid } from "guid-typescript"
import BaseModel from './BaseModel'
import { getStatsActions } from '../actions'

const generatedID = Guid.create().toString())

export const StatsMST = types.model("Stats", {
  id: types.optional(types.string, generatedID),
  level: types.optional(types.number, 0),
  damage: types.optional(types.number, 0),
  defense: types.optional(types.number, 0)
}).actions(self => getStatsActions(self))

export interface IStats extends Instance<typeof StatsMST> { }

export default class Stats extends BaseModel {
  id: string = generatedID
  level: number = 0
  damage: number = 0
  defense: number = 0
}
