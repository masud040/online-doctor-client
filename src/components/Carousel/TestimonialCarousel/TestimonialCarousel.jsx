import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TestimonialCarousel = () => {
  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await axios.get("testimonials.json");
      return data;
    },
  });

  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[500px]"
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="text-center space-y-4 mt-8 lg:mt-0 h-full  bg-slate-200 p-4 rounded-md">
              <img
                src={testimonial?.image}
                className="w-28 h-28 mx-auto rounded-full"
                alt=""
              />
              <h4 className="text-xl font-bold">{testimonial.user_name}</h4>
              <h4 className="uppercase font-bold ">
                Patient of{" "}
                <span className="text-teal-500 ">
                  {testimonial.service_name}
                </span>
              </h4>
              <p className=" text-justify  "> {testimonial.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
