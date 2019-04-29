// import * as React from "react"
// import * as ReactDOM from "react-dom"
// import App from "./App"
import Models from "./core/models/index"

// it("renders without crashing", () => {
//   const div = document.createElement("div")
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })

const statsTS = { ...(new Models.Stats()) }
const entityTS = { ...(new Models.Entity()) }
const actorTS = { ...(new Models.Actor()) }
const modifierTS = { ...(new Models.Modifier()) }
const moveTS = { ...(new Models.Move()) }

const statsMST = Models.StatsMST.create(statsTS)
const entityMST = Models.EntityMST.create(entityTS)
const actorMST = Models.ActorMST.create(actorTS)
const modifierMST = Models.ModifierMST.create(modifierTS)
const moveMST = Models.MoveMST.create(moveTS)

it("test TS models", () => {
  console.log("Stats TS Model:\n", statsTS)
  console.log("Entity TS Model:\n", entityTS)
  console.log("Actor TS Model:\n", actorTS)
  console.log("Modifier TS Model:\n", modifierTS)
  console.log("Move TS Model:\n", moveTS)
})

it("test MST models", () => {

  console.log("RETURNED TEST:", statsMST.setLevel(1000))

  console.log("Stats MST Model:\n", { ...statsMST })
  console.log("Entity MST Model:\n", { ...entityMST })
  console.log("Actor MST Model:\n", { ...actorMST })
  console.log("Modifier MST Model:\n", { ...modifierMST })
  console.log("Move MST Model:\n", { ...moveMST })
})
