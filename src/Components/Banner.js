import BannerBackground from "../Assets/girl.jpg";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "../Components/Navbar"

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[800px] rounded-lg "
      style={{ backgroundImage: `url(${BannerBackground})` }}
    >
        <div><Navbar/></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start text-start text-white p-8 mb-[-100px] ">
        <div className="bg-[rgba(255,255,255,0.4)] p-8 rounded-xl mb-10 relative">
          <h1 className="lg:text-8xl text-4xl font-bold mb-4 text-black">Residential Cleaning</h1>
          <p className="text-black text-lg mb-8 max-w-[900px]">We understand that every household has unique needs, which is why we offer customizable cleaning plans tailored to your specific requirements for our community in Pinellas County and Tampa bay area.</p>
        </div>
        <div className="flex space-x-4">
          <button className="secondary-button">
            Request a Budget
            <FiArrowRight />{" "}
          </button>
          <button className="secondary-button">
            Request a Budget
            <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
