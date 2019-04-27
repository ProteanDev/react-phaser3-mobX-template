import { types } from 'mobx-state-tree'
import Entity from './Entity'

const Actor = {
	entity: types.optional(Entity),
	hitpoints: types.optional(types.number, 100)
}

const ActorModel = types.model('Actor', Actor)

export default ActorModel