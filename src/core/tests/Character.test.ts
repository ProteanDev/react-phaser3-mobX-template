import Character, { CharacterMST } from '../models/Character'

it("Character Model Test", () => {
  const characterTS = { ...(new Character()) }
  const characterMST = CharacterMST.create(characterTS)
})