import React from 'react'

export default function TechnicalSkills() {
  const techs = [
    {
      id: 1,
      src: "./images/html.png",
      title: "HTML",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500"
    },
    {
      id: 2,
      src: "./images/css2.png",
      title: "CSS",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500"
    },
    {
      id: 3,
      src: "./images/javascript.png",
      title: "JavaScript",
      style: " shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500"
    },
    {
      id: 4,
      src: "./images/c.png",
      title: "C",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500"
    },
    {
      id: 5,
      src: "./images/c++3.png",
      title: "C++",
      style: " shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500"
    },
    {
      id: 6,
      src: "./images/java.png",
      title: "Java",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500"
    },
    {
      id: 7,
      src: "./images/figma.png",
      title: "Figma",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-violet-500"
    },
    {
      id: 8,
      src: "./images/visily.png",
      title: "Visil",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-300"
    },
    {
      id: 9,
      src: "./images/json.png",
      title: "JSON",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500"
    },
    {
      id: 10,
      src: "./images/mysql.png",
      title: "MySQL",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500"
    },
    {
      id: 11,
      src: "./images/react.png",
      title: "React",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600"
    },
    {
      id: 12,
      src: "./images/tailwind.png",
      title: "Tailwind CSS",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400"
    },
    {
      id: 13,
      src: "./images/vscode.png",
      title: "VS Code",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500"
    },
    {
      id: 14,
      src: "./images/Bootstrap.png",
      title: "Bootstrap",
      style: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-violet-500"
    },
  
  ]
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full md:h-fit">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="mt-16 ">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            Technical Skills</p>
          <p className="py-6">This are the technologies i have worked with</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-10 sm:px-0">
          {
            techs.map(({ id, src, title, style}) => (
              <div key={id} 
              className={style}>
                <img src={src} className="w-20 mx-auto" alt='Loading'
                />
                <p className="mt-4">{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
