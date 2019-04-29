import { IActor } from '../models/Actor'

const getActorActions = <T extends IActor>(self: T) => ({
  setLevel(lvl: number): number { return self.level = lvl }
  addLevel(lvl = 1): number { return self.level += lvl }
  minusLevel(lvl = 1): number { return self.level -= lvl }
  setDamage(dmg: number): number { return self.damage = dmg }
  addDamage(dmg = 1): number { return self.damage += dmg }
  minusDamage(dmg = 1): number { return self.damage -= dmg }
  setDefense(def: number): number { return self.defense = def }
  addDefense(def = 1): number { return self.defense += def }
  minusDefense(def = 1): number { return self.defense -= def }
  setIndestructable(des = true): boolean { return self.indestructable = des }
  setHitPoints(hp = 100): number { return self.hitPoints = hp }
})

export default getActorActions
