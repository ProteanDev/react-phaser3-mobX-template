import Models from '../models'
import { getStatsActions } from '../actions'

const statsTS = { ...(new Models.Stats()) }
const statsMST = Models.StatsMST.actions(self => getStatsActions(self)).create(statsTS)

it("setLevel", () => {
  statsMST.setLevel(100)
  expect(statsMST.level).toBe(100)
  statsMST.setLevel(0)
  expect(statsMST.level).toBe(0)
})

it("addLevel", () => {
  statsMST.addLevel()
  expect(statsMST.level).toBe(1)
})

it("minusLevel", () => {
  statsMST.minusLevel()
  expect(statsMST.level).toBe(0)
})

it("setDamage", () => {
  statsMST.setDamage(100)
  expect(statsMST.damage).toBe(100)
  statsMST.setDamage(0)
  expect(statsMST.damage).toBe(0)
})

it("addDamage", () => {
  statsMST.addDamage()
  expect(statsMST.damage).toBe(1)
})

it("minusDamage", () => {
  statsMST.minusDamage()
  expect(statsMST.damage).toBe(0)
})

it("setDefense", () => {
  statsMST.setDefense(100)
  expect(statsMST.defense).toBe(100)
  statsMST.setDefense(0)
  expect(statsMST.defense).toBe(0)
})

it("addDefense", () => {
  statsMST.addDefense()
  expect(statsMST.defense).toBe(1)
})

it("minusDefense", () => {
  statsMST.minusDefense()
  expect(statsMST.defense).toBe(0)
})