import { IMove } from '../models/Move'
import Modifier from '../models/Modifier'
import { remove } from 'lodash'

const getMoveActions = <T extends IMove>(self: T) => ({
  setCooldown(cd = 0): number { return self.cooldown = cd }
  addCooldown(cd = 1): number { return self.cooldown += cd }
  minusCooldown(cd = 1): number { return self.cooldown -= cd }
  addModifier(mod = new Modifier()): string[] {
    self.modifiers.push(mod.id)
    // console.log("MST ARRAY: ", self.modifiers.slice())
    return self.modifiers.slice()
  }
  removeModifier(modId: string): string[] {
    remove(self.modifiers, v => v === modId)
    return self.modifiers.slice()
  }
  setIsReaction(rac = true): boolean { return self.isReaction = rac }
})

export default getMoveActions
