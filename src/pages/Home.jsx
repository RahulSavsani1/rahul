import React from 'react'
// import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800 pb-[5rem]  ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold mt-10 text-white">
            Hi, I'm Rahul Savsani
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-3xl">
            I'm a UI/UX Web Designer and a Frontend Web Developer.
          </p>
        </div>
        <div>
          <img
            src="./images/Rahul_photo.jpg" 
            className="rounded-2xl mx-auto h-[50vh] md:w-full"
            alt='Loading'
          />
        </div>
      </div>
    </div>
  )
}