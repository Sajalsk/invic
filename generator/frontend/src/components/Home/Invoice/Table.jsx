import React from 'react'

const Table = ({list,total}) => {
  return (
    <>
    
    <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td>
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            </td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div className="mt-5 flex items-end justify-end text-gray-800 text-2xl font-bold">Total sum is {total.toLocaleString()}</div>
    </>
  )
}

export default Table