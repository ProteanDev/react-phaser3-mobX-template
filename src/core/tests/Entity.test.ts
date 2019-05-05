import Entity, { EntityMST } from '../models/Entity'

it("Entity Model Test", () => {
  const entityTS = { ...(new Entity()) }
  const entityMST = EntityMST.create(entityTS)
  // console.log("Entity TS Model:\n", entityTS)
  // console.log("Entity MST Model:\n", { ...entityMST })
})