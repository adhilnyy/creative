import React from 'react'

const Shimmer = () => {
  return (
    <>
        {Array(6).fill("").map((_,i)=>(
            <div className="w-full h-32 p-4 shadow-md mb-3 animate-pulse rounded-lg relative bg-gray-50 cursor-pointer" key={i}></div>
        ))}
    </>
  )
}

export default Shimmer