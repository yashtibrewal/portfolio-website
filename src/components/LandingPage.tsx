import coffeImage from "../images/coffee.webp"

function LandingPage() {
    return (
      <div className="m-0">
          <img
            id="landingPageImage"
            src={coffeImage}
            alt="Image could not be loaded"
          ></img>
      </div>
    );
  }

export default LandingPage