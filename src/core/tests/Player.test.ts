import Models from '../models'

it("Player Model Test", () => {
  const playerTS = { ...(new Models.Player()) }
  const playerMST = Models.PlayerMST.create(playerTS)
})