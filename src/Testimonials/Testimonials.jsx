import { FaQuoteLeft } from "react-icons/fa";
import TestimonialCarousel from "../components/Carousel/TestimonialCarousel/TestimonialCarousel";

const Testimonials = () => {
  return (
    <div className="lg:grid grid-cols-3 my-8 gap-6">
      <div className="col-span-1 text-center bg-teal-400 min-h-[500px] rounded-md text-slate-100 p-5 space-y-8">
        <FaQuoteLeft className="text-9xl mx-auto " />

        <h3 className="text-3xl font-bold">Testimonials</h3>
        <h1 className="text-5xl font-semibold ">
          Why People Says <br /> About Our Services
        </h1>
      </div>
      <div className="col-span-2">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
