import { ModelInstanceTypeProps } from 'mobx-state-tree'
import Models from "../models/index"

// CRUD Operations for the models

const Create = <T extends {}>(store: T, object: T): void => {
  if(store is T) {
  }
}

const Read = (store, id): void => {
}

const Update = (store, id, newObject): void => {

}

const Delete = (store, id): void => {

}

Models.Action.actions(self => {

 })

Models.Actor.actions(self => { })

Models.Entity.actions(self => { })

Models.Modifier.actions(self => { })

Models.Stats.actions(self => { })
