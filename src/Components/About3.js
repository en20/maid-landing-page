import React from "react";
import icon from "../Assets/calendar.png";

const About3 = () => {
  const imageUrl =
    "https://static.wixstatic.com/media/ce3956_b754b9ee62664b498a26b9b34b39c0dd~mv2.jpeg/v1/fill/w_768,h_344,al_c,q_80,enc_avif,quality_auto/always-sparkling-04%20(1).jpeg";

  return (
    <div className="flex flex-col justify-center items-center lg:mt-24 mt-16 p-4">
      <h1 className="centralizado primary-heading-about flex justify-center items-center text-center">
        Why choose our services?
      </h1>
      <p className="centralizado primary-text-about flex justify-center items-center text-center">
        We offer quality, trust, and customized solutions to meet your needs,
        making your home or business cleaner and more pleasant.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mt-[20px]">
        {[
          {
            title: "Weekly Cleaning",
            description:
              "​Keep your home consistently fresh and immaculate with our weekly cleaning service. Our skilled team at always sparkling will meticulously clean and sanitize your space every week, ensuring that every corner shines and every surface sparkles. With our weekly service, you can enjoy the luxury of a pristine home without the hassle.",
          },
          {
            title: "Bi-Weekly Cleaning",
            description:
              "Enjoy the convenience of regular cleaning without feeling overwhelmed by scheduling with our bi-weekly cleaning service. Our experienced cleaners at always sparkling will visit your home every two weeks to maintain its cleanliness and hygiene standards. Say goodbye to dust and dirt buildup, and hello to a consistently fresh and inviting living environment.",
          },
          {
            title: "Monthly Cleaning",
            description:
              "Ensure your home remains clean and comfortable with our monthly cleaning service. Perfect for those with lighter cleaning needs or busy schedules, our monthly service provides a thorough clean once a month to keep your home in top condition. Relax and unwind in a spotless living space without the stress of cleaning chores.",
          },
          {
            title: "Custom Cleaning",
            description:
              "Tailor our cleaning services to suit your unique needs and preferences with our custom cleaning plans. Whether you require specific areas of focus, additional cleaning tasks, or have special requests, we'll work closely with you to create a personalized cleaning schedule that meets your exact requirements. Enjoy the flexibility and peace of mind of a cleaning plan designed just for you.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-black flex flex-col justify-start items-center bg-[#FFC0CB] text-white text-base w-full max-w-[500px] min-h-[300px] p-5 rounded-lg text-center transition-transform duration-300 ease-in-out"
          >
            <img
              src={imageUrl}
              alt="Always Sparkling"
              className="w-full h-auto rounded-lg mb-4"
            />
            <img
              src={icon}
              alt="Ícone personalizado"
              className="w-10 h-10 mb-4"
            />
            <p className="font-bold text-5xl mb-4">{item.title}</p>
            <p className="flex-grow text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About3;
