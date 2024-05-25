import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center flex-col  '>
        <h1 className='text-3xl pt-16 pb-8'>
            Movie Not Found !
        </h1>
        <div>
        <button class="bg-green-500  hover:bg-green-700 text-white font-bold py-2 md:mt-8 px-16 rounded-full">
 <Link to={'/'}>Go Back</Link>
</button>
        </div>
    </div>
  )
}

export default NotFound