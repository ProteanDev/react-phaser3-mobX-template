import { types } from 'mobx-state-tree'

const Stats = {
	level: types.optional(types.number, 0),
	damage: types.optional(types.number, 0),
	defense: types.optional(types.number, 0)
}

const StatsModel = types.model('Stats', Stats)

export default StatsModel