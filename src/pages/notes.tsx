import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CategorySelector from "../components/CategorySelector"
import NoteCard from "../components/NoteCard"
import { fetchNotes, deleteNote } from "../api/actions"

interface Props {}
type User = {
  _id: string
}
type Note = {
  _id: string
  title: string
  body: string
  uid: string
  category: string
}

const Notes = (props: Props) => {
  const [alert, setAlert] = useState("")
  const [category, setCategory] = useState("All")
  const [notes, setNotes] = useState<Array<Note>>([])
  const [selectedNoteIds, setSelectedNoteIds] = useState([])
  const [userId, setUserId] = useState("")

  function fetchData() {
    fetchNotes()
      .then(res => {
        setNotes([...res])
      })
      .catch(e => {
        setAlert(e.toString())
      })
  }

  useEffect(() => {
    let user: User = JSON.parse(localStorage.getItem("user") || "")
    setUserId(user._id)
    fetchData()
  }, [userId])

  const filteredNotes = () => {
    if (category === "All") return notes
    else return notes.filter(n => n.category === category)
  }

  const bulkDelete = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      setAlert("")
      await Promise.all(selectedNoteIds.map(async x => await deleteNote(x)))
      //this.notes = await fetchNotes()
    } catch (e) {
      setAlert(e)
    }
  }
  return (
    <div className="home h-full w-4/5 lg:w-3/4 m-auto">
      <section className="flex flex-wrap justify-between mb-8 mt-8 lg:mt-16">
        <CategorySelector />
        <button
          onClick={bulkDelete}
          className="btn-main bg-red-500 hover:bg-red-400 ml-4 md:mr-auto"
        >
          Delete selected
        </button>
        <Link to="/note">
          <button className="btn-main bg-green-500 hover:bg-green-400 mt-4 md:mt-0 w-full md:w-auto">
            Create new
          </button>
        </Link>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alert && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{alert}</span>
          </div>
        )}
        {filteredNotes().forEach(x => (
          <div>
            <label className="text-gray-500 font-bold flex items-center">
              <input className="leading-tight" type="checkbox" />
              <span className="text-sm">Select for delete</span>
            </label>
            <NoteCard note={x} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Notes
