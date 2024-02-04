import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({name,address,email,bankName,bankaccount,website,phone}) => {
  return (
    <div className='footer border-t-2 border-gray-300 pt-5 '>
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className="font-bold">Your name:</span> {name}
            </li>
            <li>
              <span className="font-bold">Your email:</span>{" "}
             {email}
            </li>
            <li>
              <span className="font-bold"></span> {phone}
            </li>
            <li>
              <span className="font-bold">Bank:</span> {bankName}
            </li>
            <li>
              <span className="font-bold">Account holder:</span>{name}
            </li>
            <li>
            <span className="font-bold">Account number:</span> {bankaccount}
            </li>
            <li>
                <Link to="/">
              <span className="font-bold">Website:</span>{" "}
              {website}
              </Link>
            </li>
          </ul>
        </footer>
    </div>
  )
}

export default Footer