import Actor, { ActorMST } from '../models/Actor'

it("Actor Model Test", () => {
  const actorTS = { ...(new Actor()) }
  const actorMST = ActorMST.create(actorTS)
  // console.log("Actor TS Model:\n", actorTS)
  // console.log("Actor MST Model:\n", { ...actorMST })
})