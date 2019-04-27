import { types } from "mobx-state-tree"
import Stats from "./Stats"
import uuid from "uuid/v4"

const Modifier = {
  id: types.optional(types.identifier, uuid()),
  addStats: types.optional(Stats),
  minusStats: types.optional(Stats)
}

const ModifierModel = types.model("Modifier", Modifier)

export default ModifierModel
