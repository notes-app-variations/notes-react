import React from "react"
import { useState } from "react"
import queryString from "query-string"
import marked from "marked"
import { RouteComponentProps } from "react-router"
import { useHistory } from "react-router-dom"
import { postNote, editNote, deleteNote } from "../api/actions"
import CategorySelector from "../components/CategorySelector"

interface Props extends RouteComponentProps {}

const Note = (props: Props) => {
  const parsed = queryString.parse(props.location.search)
  const [_id, setId] = useState(parsed._id?.toString() || "")
  const [title, setTitle] = useState(parsed.title?.toString() || "Title")
  const [body, setBody] = useState(parsed.body?.toString() || "")
  const [category, setCategory] = useState(
    parsed.category?.toString() || "Work"
  )
  const [alert, setAlert] = useState("")
  const history = useHistory()

  const compileMarkdown = () => {
    return marked(body)
  }
  const onEditTitle = (e: any) => {
    setTitle(e.target.value)
  }
  const updateBody = (e: any) => {
    setBody(e.target.value)
  }
  const saveNote = (e: any) => {
    e.preventDefault()
    if (_id) {
      try {
        editNote(_id, {
          title: title,
          body: body,
          category: category,
        })
        history.push("/notes")
      } catch (e) {
        setAlert(e)
      }
    } else {
      try {
        postNote({
          title: title,
          body: body,
          category: category,
        })
        history.push("/notes")
      } catch (e) {
        setAlert(e)
      }
    }
  }
  const deleteThisNote = (e: any) => {
    e.preventDefault()
    try {
      deleteNote(_id)
      history.push("/notes")
    } catch (e) {
      setAlert(e)
    }
  }
  const handleCategoryChange = (category: string) => {
    setCategory(category)
  }

  return (
    <div className="h-full  w-5/6 lg:w-2/5 m-auto">
      <form onSubmit={saveNote} className="flex flex-col">
        <div className="note-header flex items-end my-5">
          <input
            value={title}
            onChange={(e) => onEditTitle(e)}
            className=" w-3/5 mr-4"
          ></input>
          <CategorySelector
            category={category}
            onCategoryChange={handleCategoryChange}
            hasOptionForAll={false}
          />
        </div>
        <p className="text-xs italic ml-auto text-gray-500">
          TIP: You can write markdown!
          <a
            className=" text-blue-500"
            href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
          >
            Cheatsheet
          </a>
        </p>
        <textarea
          onChange={(e) => updateBody(e)}
          value={body}
          className="border w-full h-56"
        ></textarea>
        <div className="flex my-5">
          <button
            className="btn-main bg-red-700 hover:bg-red-500"
            onClick={(e) => deleteThisNote(e)}
          >
            Delete
          </button>
          <button className="btn-main ml-auto w-1/3" type="submit">
            Save
          </button>
        </div>
        {alert !== "" && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{alert}</span>
          </div>
        )}
      </form>
      <section className="my-6 bg-gray-200 text-gray-600 p-4 rounded-sm">
        <h3>Preview</h3>
        <hr />

        <div dangerouslySetInnerHTML={{ __html: compileMarkdown() }}></div>
      </section>
    </div>
  )
}

export default Note
