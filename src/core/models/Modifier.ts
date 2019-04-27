import { types, IModelType } from "mobx-state-tree"
import Stats, { IStats } from "./Stats"


export interface IModifier extends IModelType {
  id: string,
  addStats: IStats,
  minusStats: IStats
}

const Modifier = {
  id: types.optional(types.identifier, uuid()),
  addStats: types.optional(Stats),
  minusStats: types.optional(Stats)
}

const ModifierModel = types.model("Modifier", Modifier)

export default ModifierModel
