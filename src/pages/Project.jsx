import React from 'react'
// import Navbar from '../Components/Navbar'

export default function Project() {
  const projects = [
    {
      name: "Mycalc",
      link: "https://savrahul.github.io/Mycalc/",
      description: "This is a simple calculator app that can do arithmetic operations quickly and has easy UI design.",
      Techstack: "HTML, CSS, JS"
    },
    {
      name: "Covid_Dashboard",
      link: "https://savrahul.github.io/covid-dashboard/",
      description: "This is a simple covid 19 dashboard from where users can get covid related data such as active cases, total deaths and many more in map representation. I have used Map-box gl api to create map representation of india and world map.",
      Techstack: " HTML, CSS, Js, realtime-api’s, Map-box-gl api."
    },
    {
      name: "Restaurant booking app (Group Project)",
      link: "https://savrahul.github.io/Restaurent-app/",
      description: "This app is useful for viewing restaurant menus and ordering food with other necessary features like cart, offers etc. I have worked on creating user interactive frontend and enabling some features using Js.",
      Techstack: " HTML, CSS, Js"
    },
    {
      name: "Ui/Ux design of Personal Portfolio (Desktop Version)",
      link: "https://www.figma.com/proto/izPUOwjRO8jkFIaKM5OQmt/Untitled?type=design&node-id=1-3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3",
      description: "This is an attractive and easy-to-use  portfolio interface using design principles, resulting in an engaging and user-friendly experience.",
      Techstack: "Figma"
    },
    {
      name: "Ui/Ux design of Personal Portfolio (Mobile Verion)",
      link: "https://www.figma.com/proto/izPUOwjRO8jkFIaKM5OQmt/Untitled?type=design&node-id=2-189&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A189&show-proto-sidebar=1",
      description: "This is an attractive and easy-to-use  portfolio interface using design principles, resulting in an engaging and user-friendly experience.",
      Techstack: "Figma"
    },
    {
      name: "Ui/Ux design of College Website",
      link: "https://app.visily.ai/projects/9125776a-e2c6-48e0-878f-2c611d81d589/boards/483878/presenter?play-mode=Prototype",
      description: "This is an attractive and easy-to-use website interface using design principles, resulting in an engaging and user-friendly experience.",
      Techstack: "visily.ai"
    },
    {
      name: "College Website (Group Project)",
      link: "https://iiit-website.onrender.com/",
      description: "This college  website project aims to create an efficient and user-friendly platform that caters to both visitors and administrators.",
      Techstack: "HTML, CSS, JSX, JSON, MERN"
    }
  ];
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full md:h-fit">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-16">
          <h2 className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            Projects
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-10 sm:px-0 ">
          {projects.map((project, index) => (
            <div key={index} className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-white hover:underline"
              >
                {project.name}
              </a>
              <p className="text-gray-500 mt-2 pt-5">{project.description}</p>
              <p className="text-gray-500 mt-2 pt-10">{"Tech_Stack : " + project.Techstack}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}