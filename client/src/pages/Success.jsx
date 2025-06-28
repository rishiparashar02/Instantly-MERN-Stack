import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Success = () => {
  const location = useLocation()

  return (
    <div className='min-h-screen flex justify-center items-center '>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center gap-6'>
        
        {/* Success Icon */}
        <div className='bg-green-100 p-4 rounded-full'>
          <AiOutlineCheckCircle className='text-green-600 text-6xl'/>
        </div>
        
        {/* Success Message */}
        <p className='text-2xl font-semibold text-center text-green-800'>
          {Boolean(location?.state?.text) ? location?.state?.text : "Payment"} Successfully
        </p>

        {/* Description Text */}
        <p className='text-gray-500 text-center'>
          Thank you for your purchase. Continue exploring more items.
        </p>

        {/* Button */}
        <Link 
          to="/" 
          className="bg-green-600 text-white hover:bg-green-700 py-2 px-6 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go To Home
        </Link>
      </div>
    </div>
  )
}

export default Success