import { baseURI, GlobalVars } from "./vars"

export const register = async (newUser: any) => {
  const result = await fetch(`${baseURI}/register`, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
  if (result.status >= 200 && result.status <= 299) {
    const userInfo = await result.json()
    localStorage.setItem("token", userInfo.token)
    localStorage.setItem("user", JSON.stringify(userInfo.user))
    GlobalVars.user = userInfo.user
    GlobalVars.token = userInfo.token
    return "ok"
  } else {
    throw Error(`Something went wrong ${await result.json()}`)
  }
}

export const login = async (newUser: any) => {
  const result = await fetch(`${baseURI}/login`, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
  if (result.status >= 200 && result.status <= 299) {
    const userInfo = await result.json()
    localStorage.setItem("token", userInfo.token)
    localStorage.setItem("user", JSON.stringify(userInfo.user))
    GlobalVars.user = userInfo.user
    GlobalVars.token = userInfo.token
    return "ok"
  } else {
    throw Error(`Something went wrong ${await result.json()}`)
  }
}
