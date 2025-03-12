import React from 'react'

const card = (props) => {
  return (
    <div className='flex flex-row mb-10'>
                <div className='w-[20%] text-gray-400 text-wrap'>
                  {props.duration}
                </div>
                <div className='w-[80%] ml-5'>
                  <p className='text-lg font-bold'>{props.title}</p>
                  <p className='text-gray-400 text-sm mb-5'>{props.company}</p>
                  <p className='text-balance'>
                   {props.description}
                  </p>
                </div>
     </div>
  )
}

export default card