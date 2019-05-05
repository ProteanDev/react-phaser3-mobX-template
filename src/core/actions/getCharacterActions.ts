import { ICharacter } from '../models/Character'
import Modifier from '../models/Modifier'
import Move from '../models/Move'
import { remove } from 'lodash'

const getCharacterActions = <T extends ICharacter>(self: T) => ({
  setLevel(lvl = 1): number { return self.level = lvl }
  addLevel(lvl = 1): number { return self.level += lvl }
  minusLevel(lvl = 1): number { return self.level -= lvl }
  setDamage(dmg = 0): number { return self.damage = dmg }
  addDamage(dmg = 1): number { return self.damage += dmg }
  minusDamage(dmg = 1): number { return self.damage -= dmg }
  setDefense(def = 0): number { return self.defense = def }
  addDefense(def = 1): number { return self.defense += def }
  minusDefense(def = 1): number { return self.defense -= def }
  setIndestructable(des = true): boolean { return self.indestructable = des }
  setHitPoints(hp = 100): number { return self.hitPoints = hp }
  addModifier(mod = new Modifier()): string[] {
    self.modifiers.push(mod.id)
    // console.log("MST ARRAY: ", self.modifiers.slice())
    return self.modifiers.slice()
  }
  removeModifier(modId: string): string[] {
    remove(self.modifiers, v => v === modId)
    return self.modifiers.slice()
  }
  addMove(move = new Move()): string[] {
    self.moves.push(move.id)
    // console.log("MST ARRAY: ", self.moves.slice())
    return self.moves.slice()
  }
  removeMove(moveId: string): string[] {
    remove(self.moves, v => v === moveId)
    return self.moves.slice()
  }
})

export default getCharacterActions
