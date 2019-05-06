import Models from '../models'
import { getPlayerActions } from '../actions'

const playerTS = { ...(new Models.Player()) }
const playerMST = Models.PlayerMST.actions(self => getPlayerActions(self)).create(playerTS)

it("addCharacter & removeCharacter", () => {
  expect(playerMST.characters).toHaveLength(0)
  const mods = playerMST.addCharacter()
  expect(playerMST.characters).toHaveLength(1)
  playerMST.removeCharacter(mods[0])
  expect(playerMST.characters).toHaveLength(0)
})