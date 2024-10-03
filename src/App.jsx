import "./App.css"; // Import your custom CSS
import Navbar from "./components/Navbar";

import rocketImg from "../src/assets/rocket.svg";
import openImg from "../src/assets/open-bg.svg";
import openImgMobile from "../src/assets/opening-bg-mobile.svg";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        {/* content */}
        <div className="w-full  md:w-1/2 md:flex items-center justify-center  md:min-h-full mt-24 md:mt-0 ">
          <div className="text-2xl md:text-3xl lg:text-5xl mt-4 font-medium space-y-2 md:space-y-4 text-center md:text-left">
            <h2 className=" text-gray-500 ">Launching Soon! </h2>
            <h2 className="  ">Unloack Everything </h2>
            <h2 className="  ">You Need at সবকিছু </h2>
          </div>
        </div>

        {/* banner */}
        <div className="w-full md:w-1/2 min-h-full">
          <div
            style={{
              backgroundImage: `url(${openImgMobile})`,
            }}
            className=" w-full h-full bg-cover bg-center bg-no-repeat md:hidden "
          >
            <div className="h-full flex justify-center items-center">
              <img
                src={rocketImg}
                className="w-1/5 ml-14 rocket-animation"
                alt="Rocket"
              />
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${openImg}) ` }}
            className="h-full bg-cover bg-no-repeat hidden md:block"
          >
            <div className="h-full flex justify-center items-center">
              <img
                src={rocketImg}
                className="w-1/5 ml-14 rocket-animation"
                alt="Rocket"
              />
            </div>
          </div>
        </div>
        {/* <div className="w-full md:w-1/2  relative  ">
          <img
            src={openImgMobile}
            alt="সবকিছু's background image"
            className="w-full md:hidden object-cover"
          />

          <img
            src={openImg}
            alt="সবকিছু's background image"
            className="w-full hidden md:block object-cover "
          />
          <div className="bottom-1/2 absolute w-full md:left-[43%]">
            <img
              src={rocketImg}
              className="w-1/5 rocket-animation  "
              alt="Rocket"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
