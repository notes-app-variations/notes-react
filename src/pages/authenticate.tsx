import React from "react"

interface Props {}

const Authenticate = (props: Props) => {
  return (
    <div className="h-64 flex justify-center items-center">
      <ul className="flex border-b list-none">
        <li className="mr-1 w-1/2">
          hi
          <button className="bg-orange-100 w-full inline-block py-2 px-4 text-gray-500 font-semibold focus:outline-none"></button>
        </li>
      </ul>
    </div>
  )
}

export default Authenticate
