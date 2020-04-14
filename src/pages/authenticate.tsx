import React, { useState } from "react"
import Login from "../components/Login"
import Register from "../components/Register"

interface Props {}

const Authenticate = (props: Props) => {
  const [authToggle, setAuthToggle] = useState(false)

  const toggleAuth = (value: boolean, e: React.FormEvent) => {
    e.preventDefault()
    setAuthToggle(value)
  }
  return (
    <div className="h-full flex justify-center items-center">
      <div className="h-64">
        <ul className="flex border-b list-none">
          <li className="mr-1 w-1/2">
            <button
              className="bg-orange-100 w-full inline-block py-2 px-4 text-gray-500 font-semibold focus:outline-none"
              onClick={(e) => toggleAuth(false, e)}
            >
              Login
            </button>
          </li>
          <li className="w-1/2">
            <button
              className="bg-orange-100 w-full inline-block py-2 px-4 text-gray-500 font-semibold focus:outline-none"
              onClick={(e) => toggleAuth(true, e)}
            >
              Register
            </button>
          </li>
        </ul>
        <div className="p-6 bg-orange-200 border-l border-r border-b shadow">
          {authToggle ? <Register /> : <Login />}
        </div>
      </div>
    </div>
  )
}

export default Authenticate
