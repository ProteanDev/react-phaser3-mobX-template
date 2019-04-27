import { types } from 'mobx-state-tree'
import Stats from './Stats'

const Modifier = {
	addStats: types.optional(Stats),
	minusStats: types.optional(Stats)
}

const ModifierModel = types.model('Modifier', Modifier)

export default ModifierModel