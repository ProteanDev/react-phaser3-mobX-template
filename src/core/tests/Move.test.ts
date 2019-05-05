import Move, { MoveMST } from '../models/Move'

it("Move Model Test", () => {
  const moveTS = { ...(new Move()) }
  const moveMST = MoveMST.create(moveTS)
  // console.log("Move TS Model:\n", moveTS)
  // console.log("Move MST Model:\n", { ...moveMST })
})