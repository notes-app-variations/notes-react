import React from "react"
import { useState } from "react"
import CategorySelector from "../components/CategorySelector"

interface Props {}

const Note = (props: Props) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")
  const [alert, setAlert] = useState("")

  const saveNote = () => {}
  const onEdit = () => {}
  const updateBody = () => {}
  const deleteNote = () => {}

  return (
    <div className="h-full  w-5/6 lg:w-2/5 m-auto">
      <form onSubmit={saveNote} className="flex flex-col">
        <div className="note-header flex items-end my-5">
          <h2 onBlur={onEdit} className=" w-3/5 mr-4">
            {title}
          </h2>
          <CategorySelector />
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
          onInput={updateBody}
          className="border w-full h-56"
        ></textarea>
        <div className="flex my-5">
          <button
            className="btn-main bg-red-700 hover:bg-red-500"
            onClick={deleteNote}
          >
            Delete
          </button>
          <button className="btn-main ml-auto w-1/3" type="submit">
            Save
          </button>
        </div>
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{alert}</span>
        </div>
      </form>
      <section className="my-6 bg-gray-200 text-gray-600 p-4 rounded-sm">
        <h3>Preview</h3>
        <hr />

        <div v-html="compiledMarkdown"></div>
      </section>
    </div>
  )
}

export default Note
