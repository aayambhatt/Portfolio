const Skills = () => {
    return (
      <section id="skills" className="py-24 pt-12 bg-base-200 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-6">My Skills & Tools</h2>
          <div className=" pt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
            
            {/* C++ */}
            <div className="tooltip" data-tip="C++">
              <i className="devicon-cplusplus-plain colored text-6xl"></i>
            </div>
  
            {/* JavaScript */}
            <div className="tooltip" data-tip="JavaScript">
              <i className="devicon-javascript-plain colored text-6xl"></i>
            </div>
  
            {/* SQL */}
            <div className="tooltip" data-tip="SQL">
              <i className="devicon-mysql-plain colored text-6xl"></i>
            </div>
  
            {/* MongoDB */}
            <div className="tooltip" data-tip="MongoDB">
              <i className="devicon-mongodb-plain colored text-6xl"></i>
            </div>
  
            {/* HTML */}
            <div className="tooltip" data-tip="HTML">
              <i className="devicon-html5-plain colored text-6xl"></i>
            </div>
  
            {/* CSS */}
            <div className="tooltip" data-tip="CSS">
              <i className="devicon-css3-plain colored text-6xl"></i>
            </div>
  
            {/* TailwindCSS */}
            <div className="tooltip" data-tip="Tailwind CSS">
              <i className="devicon-tailwindcss-plain colored text-6xl"></i>
            </div>
  
            {/* NodeJS */}
            <div className="tooltip" data-tip="Node.js">
              <i className="devicon-nodejs-plain colored text-6xl"></i>
            </div>
  
            {/* ReactJS */}
            <div className="tooltip" data-tip="React.js">
              <i className="devicon-react-original colored text-6xl"></i>
            </div>
  
            {/* ExpressJS */}
            <div className="tooltip" data-tip="Express.js">
              <i className="devicon-express-original colored text-6xl"></i>
            </div>
  
            {/* Git */}
            <div className="tooltip" data-tip="Git">
              <i className="devicon-git-plain colored text-6xl"></i>
            </div>
  
            {/* GitHub */}
            <div className="tooltip" data-tip="GitHub">
              <i className="devicon-github-original text-6xl"></i>
            </div>
  
            {/* Postman */}
            <div className="tooltip" data-tip="Postman">
              <i className="devicon-postman-plain colored text-6xl"></i>
            </div>
  
            {/* Unix */}
            <div className="tooltip" data-tip="Unix">
               
              <i className="devicon-linux-plain colored text-6xl"></i>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  