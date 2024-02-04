import React from 'react'

const Dates = ({dueDate,invoiceNumber,invoiceDate}) => {
  return (
    <div>  <article className="my-5 flex items-end justify-end">
    <ul>
      <li>
        <span className="p-1 font-bold">Invoice Number : {invoiceNumber}</span>
      </li>
      <li>
        <span className="p-1 bg-gray-100 font-bold">Invoice Date :{invoiceDate}</span>
      </li>
      <li>
        <span className="p-1 font-bold">Due Date : {dueDate}</span>
      </li>
    </ul>
  </article></div>
  )
}

export default Dates