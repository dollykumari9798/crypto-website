import AboutSec from "../components/AboutSec";
import Collection from "../components/Collection";
import FAQ from "../components/FAQ";
import GetStarted from "../components/GetStarted";
import Mobile from "../components/Mobile";
import Navbar from "../components/Navbar";
import Sec1 from "../components/Sec1";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Timer from "../components/Timer";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div
      className="Home"
      style={{
        backgroundColor: " #f3eee2",
      }}
    >
      <Sec1 />
      <AboutSec/>
      <Services/>
      <WhyUs/>
      {/* <Testimonials/> */}
      <Collection/>
      <Timer/>
      <Mobile/>
      <FAQ/>
      <GetStarted/>
    </div>
  );
};

export default Home;
