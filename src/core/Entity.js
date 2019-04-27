import { types } from 'mobx-state-tree'
import Stats from './Stats'
import uuid from 'uuid/v4'

const Entity = {
	id: types.optional(types.identifier, uuid()),
	stats: types.optional(Stats),
	indestructable: types.optional(types.boolean, false)
}

const EntityModel = types.model('Entity', Entity)

export default EntityModel