import Testimonials from "../../Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Banner from "../../components/Home/Banner/Banner";
import Doctors from "../../components/Home/Doctors/Doctors";
import Features from "../../components/Home/Features/Features";
import Services from "../../components/Home/Services/Services";
import Container from "../../components/Shared/Container";

const Home = () => {
  return (
    <div className="text-gray-700">
      <Container>
        <Banner />
        {/* TODOS */}
        <Features />
        <Services />
        <Doctors />
        <Testimonials />
        <Contact />
      </Container>
    </div>
  );
};

export default Home;
