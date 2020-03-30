import { baseURI, Note } from "./vars"

export const fetchNotes = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "")
  const uid = user._id
  const result = await fetch(`${baseURI}/notes/user/${uid}`, {
    headers: {
      Authorization: localStorage.getItem("token") || "",
      "Cache-Control": "no-cache"
    }
  })
  if (result.ok) {
    return await result.json()
  } else {
    throw Error(`Something went wrong ${await result.json()}`)
  }
}

export const postNote = async (note: Note) => {
  const user = JSON.parse(localStorage.getItem("user") || "")
  const uid = user._id
  const result = await fetch(`${baseURI}/notes/`, {
    method: "post",
    headers: {
      Authorization: localStorage.getItem("token") || "",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...note, userId: uid })
  })
  if (result.ok) {
    return "ok"
  } else {
    throw Error(`Something went wrong ${await result.json()}`)
  }
}

export const editNote = async (id: string, note: Note) => {
  const user = JSON.parse(localStorage.getItem("user") || "")
  const uid = user._id
  const result = await fetch(`${baseURI}/notes/${id}`, {
    method: "put",
    headers: {
      Authorization: localStorage.getItem("token") || "",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...note, userId: uid })
  })
  if (result.ok) {
    return "ok"
  } else {
    throw Error(`Something went wrong ${await result.json()}`)
  }
}

export const deleteNote = async (id: string) => {
  const result = await fetch(`${baseURI}/notes/${id}`, {
    method: "delete",
    headers: {
      Authorization: localStorage.getItem("token") || "",
      "Content-Type": "application/json"
    }
  })
  if (result.ok) {
    return "ok"
  } else {
    throw Error(`Something went wrong ${await result.json()}`)
  }
}
