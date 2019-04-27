import { types } from "mobx-state-tree"
import Entity, { IEntity } from "./Entity"

export interface IActor extends IEntity {
  hitPoints: number
}

const Actor = {
  entity: types.optional(Entity),
  hitPoints: types.optional(types.number, 100)
}

const ActorModel = types.model("Actor", Actor)

export default ActorModel
