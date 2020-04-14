export const baseURI = "http://localhost:5000/api"
export class GlobalVars {
  public static user: User
  public static token: string
}

export interface User {
  _id: string
  username: string
  email: string
  password: string
}

export interface Note {
  title: string
  body: string
  category: string
  userId?: string
  _id?: string
  createdAt?: string
}
