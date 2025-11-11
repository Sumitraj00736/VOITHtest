import React from 'react'

const Error = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen flex-col'>
        <h1 className='text-2xl font-extrabold text-[#EA3C3C]'>Error 404:Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <div className='mt-4'>
            <a href='/' className='text-white bg-[#EA3C3C] px-4 py-2 rounded-lg hover:bg-red-700 transition'>Go to Home</a>
        </div>
    </div>
      
    </>
  )
}

export default Error
