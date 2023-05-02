import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className=' text-center'>
      <div className=''>
        <FaceFrownIcon className='w-25 h-25 text-warning' />
        <div className=''>
          <h2 className=''>
            <span className='text-danger'>Error</span>
            {status || 404}
          </h2>
          <p className=''>
            {error?.message}
          </p>
          <Link to='/' className='btn btn-danger'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage