import React from "react"
import Authenticate from "./pages/authenticate"
import Notes from "./pages/notes"
import Note from "./pages/note"
import { withRouter, Switch, Route, Link } from "react-router-dom"
import { RouteComponentProps } from "react-router-dom"

interface Props extends RouteComponentProps {}

function App(props: Props) {
  const logout = (e: React.MouseEvent) => {
    e.preventDefault()
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    props.history.push("/")
  }
  return (
    <div className="App flex flex-col h-full">
      <header className="flex justify-between items-center">
        <Link to="/notes">
          <h1 className="page-title text-gray-900 ml-3">notes.</h1>
        </Link>
        <button className="btn-main mr-3" onClick={logout}>
          Logout
        </button>
      </header>
      <section className="h-100 flex-1">
        <Switch>
          <Route exact path="/" render={props => <Authenticate {...props} />} />
          <Route exact path="/notes" render={props => <Notes {...props} />} />
          <Route exact path="/note" render={props => <Note {...props} />} />
        </Switch>
      </section>
      <footer className="flex justify-center">
        <p className="m-auto text-sm font-light text-gray-500">
          Made with React &#x1F680;
        </p>
      </footer>
    </div>
  )
}

export default withRouter(App)
