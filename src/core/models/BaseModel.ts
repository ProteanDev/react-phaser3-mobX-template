// import { Guid } from "guid-typescript"
// export const _id = Guid.create().toString())

export interface IBaseModel {
  id: string
}

export default class BaseModel implements IBaseModel {
  id: string
}