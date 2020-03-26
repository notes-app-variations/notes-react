import React from "react"
import Authenticate from "./pages/authenticate"
import Notes from "./pages/notes"
import Note from "./pages/note"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App flex flex-col h-full">
        <header className="flex justify-between items-center">
          <Link to="/notes">
            <h1 className="page-title text-gray-900 ml-3">notes.</h1>
          </Link>
          <button className="btn-main mr-3">Logout</button>
        </header>
        <section className="h-100 flex-1">
          <Route path="/auth" render={props => <Authenticate {...props} />} />
          <Route exact path="/notes" render={props => <Notes {...props} />} />
          <Route exact path="/note" render={props => <Note {...props} />} />
        </section>
        <footer className="flex justify-center">
          <p className="m-auto text-sm font-light text-gray-500">
            Made with React &#x1F680;
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
