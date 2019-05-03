import { IMove } from '../models/Move'
import Modifier from '../models/Modifier'
import { toJS } from 'mobx'

const getMoveActions = <T extends IMove>(self: T) => ({
  setCooldown(cd = 0): number { return self.cooldown = cd }
  addCooldown(cd = 1): number { return self.cooldown += cd }
  minusCooldown(cd = 1): number { return self.cooldown -= cd }
  addModifier(mod: Modifier = new Modifier()): Modifier[] {
    self.modifiers.push({...mod})
    console.log("MST ARRAY: ", self.modifiers.slice())
    return self.modifiers.slice().map(v => toJS(v))
  }
  setIsReaction(rac = true): boolean { return self.isReaction = rac }
})

export default getMoveActions
