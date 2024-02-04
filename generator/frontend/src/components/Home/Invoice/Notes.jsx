import React from 'react'

const Notes = ({notes}) => {
  return (
    <div> <section className="mt-5 mb-5">
   
    <p className="lg:w-1/2 text-justify">Notes to the client...{notes}</p>
  </section></div>
  )
}

export default Notes