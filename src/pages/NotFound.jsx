import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flowise not-found'>
      <h1>Sorry the page you were looking for was not found</h1>
      <Link to="/" className='btn btn-link'>Return to home</Link>
    </div>
  )
}

export default NotFound