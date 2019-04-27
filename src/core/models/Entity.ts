import { types, Instance } from "mobx-state-tree"
import Stats, { IStats, StatsStore } from "./Stats"

const _statsPlaceholder = new Stats().toPlainObject()

export const EntityStore = types.model("Entity", {
  id: types.optional(types.identifier, _statsPlaceholder.id),
  stats: types.optional(StatsStore, _statsPlaceholder)
  indestructable: types.optional(types.boolean, false)
})

export interface IEntity extends Instance<typeof EntityStore> { }

export default class Entity extends Stats implements IEntity {
  indestructable: boolean = false
}
