import { types } from 'mobx-state-tree'
import Modifier from './Modifier'

const Action = {
	cooldown: types.optional(types.number, 0),
	modifiers: types.optional(types.array(Modifier), []),
	isReaction: types.optional(types.boolean, false)
}

const ActionModel = types.model('Action', Action)

export default ActionModel