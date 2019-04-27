import { types } from "mobx-state-tree";
import uuid from "uuid/v4";

const Stats = {
  id: types.optional(types.identifier, uuid()),
  level: types.optional(types.number, 0),
  damage: types.optional(types.number, 0),
  defense: types.optional(types.number, 0)
};

const StatsModel = types.model("Stats", Stats);

export default StatsModel;
