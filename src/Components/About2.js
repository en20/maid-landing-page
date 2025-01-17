import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdBrowserUpdated } from "react-icons/md";
import { MdOutlineDryCleaning } from "react-icons/md";
import { BsHouseHeartFill } from "react-icons/bs";

const About2 = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:mt-24 mt-16 p-4"
    id="about">
      <h1 className="centralizado primary-heading-about flex justify-center items-center text-center">
        Why choose our cleaning services?
      </h1>
      <p className="centralizado primary-text-about flex justify-center items-center text-center">
        Our cleaning services are designed to provide exceptional quality,
        attention to detail, and personalized care to ensure your space is
        spotless and welcoming.
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <MdOutlineDryCleaning className="icon" />
          <p>PROFESSIONAL CLEANING SERVICES FOR YOUR COMFORT</p>
          <p>
            Experience top-notch cleaning services designed for your
            satisfaction. Our team ensures a spotless and fresh environment
            every time. Reliable, efficient, and tailored to meet your needs.
          </p>
        </div>
        <div className="grid-item">
          <BsHouseHeartFill className="icon" />
          <p>EFFICIENT AND RELIABLE SOLUTIONS FOR YOUR NEEDS</p>
          <p>
            We offer eco-friendly cleaning methods, ensuring your space is
            spotless. Our professional team guarantees timely, consistent
            results. Trust us to deliver exceptional service every time.
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>SHARING CLEANING TIPS</p>
          <p>
            Expert cleaning advice, DIY tips, and seasonal promotions. Stay
            connected for helpful insights to maintain a cleaner home every day.
            Join our community and get the latest updates and offers.
          </p>
        </div>
        <div className="grid-item">
          <CiFaceSmile className="icon" />
          <p>CUSTOMER SATISFACTION GUARANTEE</p>
          <p>
            Your satisfaction is our priority.Our team ensures a thorough
            cleaning of every corner of your home, paying attention to the
            smallest details. We use high-quality products and techniques.
          </p>
        </div>
        <div className="grid-item">
          <GiMoneyStack className="icon" />
          <p>FLEXIBLE PAYMENT OPTIONS</p>
          <p>
            We offer secure and convenient payment methods, including credit
            cards and bank transfers, making it easier for you to enjoy our
            services.
          </p>
        </div>
        <div className="grid-item">
          <FaWhatsapp className="icon" />
          <p>QUICK SUPPORT VIA WHATSAPP</p>
          <p>
            Contact us directly on WhatsApp for Immediate assistance, quick
            responses, or to easily schedule your next cleaning service. Our
            team is ready to accommodate your schedule.
          </p>
        </div>
        <div className="grid-item">
          <MdEmail className="icon" />
          <p>PROFESSIONAL COMMUNICATION</p>
          <p>
            Receive timely email updates on your service schedule,
            confirmations, and reminders, all from a trusted, professional email
            address.
          </p>
        </div>
        <div className="grid-item">
          <FcGoogle className="icon" />
          <p>FIND US EASILY ONLINE</p>
          <p>
            With strong visibility on Google, you can quickly find our trusted
            cleaning services, read customer reviews, and book your next
            cleaning appointment.
          </p>
        </div>
        <div className="grid-item">
          <MdBrowserUpdated className="icon" />
          <p>EASY BOOKING AND UPDATES</p>
          <p className="text-grid">
            Book your next cleaning service easily through our user-friendly
            website. Schedule, reschedule, or cancel services at your
            convenience with just a few clicks. Our simple and efficient online
            booking system ensures a hassle-free experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
