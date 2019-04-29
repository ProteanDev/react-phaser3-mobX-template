import { types, Instance } from "mobx-state-tree"
import Entity from "./Entity"
import { Guid } from "guid-typescript"
import { getActorActions } from '../actions'

const generatedID = Guid.create().toString())

export const ActorMST = types.model("Actor", {
  id: types.optional(types.identifier, generatedID),
  level: types.optional(types.number, 0),
  damage: types.optional(types.number, 0),
  defense: types.optional(types.number, 0),
  indestructable: types.optional(types.boolean, false),
  hitPoints: types.optional(types.number, 100)
}).actions(self => getActorActions(self))

export interface IActor extends Instance<typeof ActorMST> { }

export default class Actor extends Entity {
  id: string = generatedID
  hitPoints: number = 100
}