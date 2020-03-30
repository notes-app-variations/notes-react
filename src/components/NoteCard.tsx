import React from "react"
import marked from "marked"

interface Props {
  note: any
}

const NoteCard = (props: Props) => {
  const bgColor = () => {
    switch (props.note.category) {
      case "Work":
        return "bg-teal-200"
      case "Personal":
        return "bg-green-200"
      case "Todo":
        return "bg-orange-200"
      case "Links":
        return "bg-blue-200"
    }
    return ""
  }

  const getBodyMarkup = () => {
    return marked(props.note.body)
  }

  return (
    <div
      className={`note-card rounded shadow-md cursor-pointer p-4 overflow-hidden flex flex-col text-gray-700 ${bgColor()}`}
    >
      <header className="flex justify-between mb-3">
        <h2>{props.note.title}</h2>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {props.note.category}
        </span>
      </header>
      <p
        className="note-body"
        dangerouslySetInnerHTML={{
          __html: getBodyMarkup()
        }}
      ></p>
      <footer className="flex justify-end mt-auto">
        <p className="text-xs italic text-gray-500 mt-2">
          {props.note.createdAt}
        </p>
      </footer>
    </div>
  )
}

export default NoteCard
