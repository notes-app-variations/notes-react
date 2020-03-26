import React from "react"
import { useState } from "react"
import { login } from "../api/authActions"
import { RouteComponentProps } from "react-router-dom"

interface Props extends RouteComponentProps {}

const Login = (props: Props) => {
  const [user, setUser] = useState({ email: "", password: "" })
  const [alert, setAlert] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(user)
      await props.history.push("/notes")
    } catch (e) {
      setAlert(e)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        value={user.email}
        onChange={e =>
          setUser({ email: e.target.value, password: user.password })
        }
        placeholder="jane@example.com"
        required
      />
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
        type="password"
        value={user.password}
        onChange={e => setUser({ email: user.email, password: e.target.value })}
        placeholder="*********"
        required
      />
      <button className="w-full btn-main" type="submit">
        {loading ? "Loading..." : "Login"}
      </button>
      {alert && <div className="bg-red-300">{alert}</div>}
    </form>
  )
}

export default Login
