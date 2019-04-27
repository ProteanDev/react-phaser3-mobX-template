import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import Models from './core/models/index'

// it("renders without crashing", () => {
//   const div = document.createElement("div")
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })

it("test ts models", () => {
  console.log(new Models.Stats())
  console.log(new Models.Entity())
})