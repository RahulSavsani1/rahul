import React from 'react'

export const About = () => {
  const educa = [
    {
      institution: "International Institute of Information Technology, Bhubaneswar",
      year: "(2019-2023)",
      description: "Bachelor of Technology- Btech Information Technology",
      // Grade : ""
    },
    {
      institution: "ODM PUBLIC SCHOOL, Bhubaneswar",
      year: "(2017-2019)",
      description: "Senior Secondary Education, Class-XII",
      // Grade: ""
    },
    {
      institution: "Siddhartha Public School, Kumelsingha",
      year: "(2008-2017)",
      description: "MATRICULATION",
      // Grade: ""
    }
  ]
  return (
    <div className="w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
        I’m an IT graduate from IIIT, BBSR. I am a web developer enthusiast.
        </p>
        <br/>
        <p className="text-xl">
        I have a huge interest in web development. Thus, I am very much interested in working in development sector.
        </p>
        <br/>
        <p className="text-xl">
        I'm a proactive and fast learning individual eager to work with a dynamic and progressive organisation that will allow me to utilise my abilities and qualifications in the field to add value to the organisation while providing me with growth opportunities.
        </p>
        <br/>
        <p className="text-xl">
        I have the ability to lead and work well in a team. I can work well with colleagues in both technical and non-technical fields thanks to my collaborative and communication abilities.
        </p>
        <div className="mt-16 ">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            Education</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-10 sm:px-0 ">
          { educa.map((educa,index) =>(
            <div key={index} className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500 flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-white hover:underline">
              {educa.institution}
            </p>
            {educa.year}
            <p className="text-gray-500 mt-2 pt-5">{educa.description}</p>
            {/* <p className="text-gray-500 mt-2 pt-5">{"Grade: " + educa.Grade}</p> */}
            </div>
            ))}
        </div>
        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
           Extra Activities
          </p>
        </div>
        <p className="text-xl mt-10">
          - Volleyball
        </p>
        <br />
        <p className="text-xl">
          - Travelling
        </p>
        <br />
        <p className="text-xl">
          - Esports gaming enthusiast
        </p>
        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline ">
           Languages Known
          </p>
        </div>
        <p className="text-xl mt-10">
          - English
        </p>
        <br />
        <p className="text-xl">
          - Hindi
        </p>
        <br />
        <p className="text-xl">
          - Odia
        </p>
        <br />
        <p className="text-xl">
          - Gujarati
        </p>
      </div>
    </div>
  )
}
