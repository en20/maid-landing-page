import BannerBackground from "../Assets/girl.jpg";
import { FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[800px]"
      style={{ backgroundImage: `url(${BannerBackground})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-start text-start text-white p-8 mb-[-100px] ">
        <div className=" p-8 rounded-xl mb-10 relative">
          <h1 className="lg:text-7xl text-4xl font-bold mb-4 text-white">Residential Cleaning</h1>
          <p className="text-white text-lg mb-8 max-w-[800px]">We understand that every household has unique needs, which is why we offer customizable cleaning plans tailored to your specific requirements for our community in Pinellas County and Tampa bay area.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#form">
            <button className="secondary-button">
              GET A QUOTE
              <FiArrowRight />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
