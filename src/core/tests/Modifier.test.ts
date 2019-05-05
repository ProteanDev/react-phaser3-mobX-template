import Modifier, { ModifierMST } from '../models/Modifier'

it("Modifier Model Test", () => {
  const modifierTS = { ...(new Modifier()) }
  const modifierMST = ModifierMST.create(modifierTS)
  // console.log("Modifier TS Model:\n", modifierTS)
  // console.log("Modifier MST Model:\n", { ...modifierMST })
})