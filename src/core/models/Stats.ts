import { types, Instance } from "mobx-state-tree"
import { Guid } from "guid-typescript"

const _id = Guid.create().toString())

export const StatsStore = types.model("Stats", {
  id: types.optional(types.string, _id),
  level: types.optional(types.number, 0),
  damage: types.optional(types.number, 0),
  defense: types.optional(types.number, 0)
})

export interface IStats extends Instance<typeof StatsStore> {}

export default class Stats implements IStats {
  id: string = _id
  level: number = 0
  damage: number = 0
  defense: number = 0

  toPlainObject(): {
    id: string,
    level: number,
    damage: number,
    defense: number
  } {
    return Object.assign({}, this)
  }
}
