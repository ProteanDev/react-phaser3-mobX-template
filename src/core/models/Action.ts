import { types } from "mobx-state-tree"
import Modifier, { IModifier } from "./Modifier"


export interface IAction extends IModifier {
  cooldown: number,
  isReaction: boolean
}

const Action = {
  id: types.optional(types.identifier, uuid()),
  cooldown: types.optional(types.number, 0),
  modifiers: types.optional(types.array(Modifier), []),
  isReaction: types.optional(types.boolean, false)
}

const ActionModel = types.model("Action", Action)

export default ActionModel
