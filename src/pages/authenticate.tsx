import React from "react"
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Register"

interface Props {}

const Authenticate = (props: Props) => {
  let { path, url } = useRouteMatch()
  console.log(`${url}register`)
  console.log(`${path}register`)
  return (
    <div className="h-full flex justify-center items-center">
      <div className="h-64">
        <ul className="flex border-b list-none">
          <li className="mr-1 w-1/2">
            <Link
              to={`${url}`}
              className="bg-orange-100 w-full inline-block py-2 px-4 text-gray-500 font-semibold focus:outline-none"
            >
              Login
            </Link>
          </li>
          <li className="w-1/2">
            <Link
              to={`${url}/register`}
              className="bg-orange-100 w-full inline-block py-2 px-4 text-gray-500 font-semibold focus:outline-none"
            >
              Register
            </Link>
          </li>
        </ul>
        <div className="p-6 bg-orange-200 border-l border-r border-b shadow">
          <Switch>
            <Route
              exact
              path={`${path}`}
              render={props => <Login {...props} />}
            ></Route>
            <Route
              exact
              path={`${path}/register`}
              render={props => <Register {...props} />}
            ></Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Authenticate
