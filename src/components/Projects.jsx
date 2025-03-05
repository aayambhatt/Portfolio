const Projects = () => {

    return (
        
        <div id="projects" className="bg-base-100 pt-8">
        <h1 className="text-center text-6xl pb-4">Projects</h1>
        <div className="flex gap-10 p-4 m-4">
        <div className="card bg-base-300 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="src/assets/Focus-Booster.jpeg"
      alt="Shoes"
      className="rounded-xl w-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Focus Booster</h2>
    <p>Developed a Chrome extension that enhances productivity by blocking
distracting websites (e.g., Facebook, YouTube, Instagram) and displaying motivational messages. Implemented
using JavaScript, HTML, and CSS with Chrome’s content scripts and storage API to asynchronously manage
user preferences, and published on Chrome Web Store.</p>
    <div className="card-actions">
      <button
        onClick={()=>{
            window.open(
                "https://chromewebstore.google.com/detail/focus-booster/gpidflcooieejkcbkchniecpkogfocmi",
                "_blank"
              )
        }}
       className="btn btn-primary">Try Now!</button>
    </div>
  </div>
</div>

        </div>
       
        
       
        </div>

    )




}

export default Projects;