import { IPlayer } from '../models/Player'
import Character from '../models/Character'
import { remove } from 'lodash'

const getPlayerActions = <T extends IPlayer>(self: T) => ({
  addCharacter(char = new Character()): string[] {
    self.characters.push(char.id)
    return self.characters.slice()
  }
  removeCharacter(charId = ""): string[] {
    remove(self.characters, v => v === charId)
    return self.characters.slice()
  }
})

export default getPlayerActions
