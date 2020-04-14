import React, { useState } from "react"

interface Props {
  onCategoryChange: any
  category?: string
  hasOptionForAll: boolean
}

const CategorySelector = (props: Props) => {
  const categories = ["Work", "Personal", "Todo", "Links"]
  if (props.hasOptionForAll) categories.unshift("All")
  const [selected, setSelected] = useState(
    props.hasOptionForAll ? "All" : "Work"
  )

  const handleChange = (event: any) => {
    setSelected(event.target.value)
    props.onCategoryChange(event.target.value)
  }
  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={selected}
        onChange={handleChange}
      >
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export default CategorySelector
