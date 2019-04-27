import { types } from 'mobx-state-tree'
import Stats from './Stats'

const Entity = {
	id: types.string,
	stats: types.optional(Stats),
	indestructable: types.optional(types.boolean, false)
}

const EntityModel = types.model('Entity', Entity)

export default EntityModel