import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About2 from "./Components/About2";
import Banner from "./Components/Banner";
import Faq from "./Components/FAQ";
import About3 from "./Components/About3";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <Home />
      <About3/>
      <About />
      <About2/>
      <Faq/>
      <Testimonial />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
