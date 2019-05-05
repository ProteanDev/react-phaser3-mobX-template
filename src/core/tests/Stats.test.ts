import Models from '../models'

it("Stats Model Test", () => {
  const statsTS = { ...(new Models.Stats()) }
  const statsMST = Models.StatsMST.create(statsTS)
  // console.log("Stats TS Model:\n", statsTS)
  // console.log("Stats MST Model:\n", { ...statsMST })
})