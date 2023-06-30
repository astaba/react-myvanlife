import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorDisplay = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  )
}

export default ErrorDisplay