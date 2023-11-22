import { useState } from "react";

const ServiceCard = ({ service }) => {
  const { image, service_name, service_details } = service || {};
  const [isShow, setShow] = useState(false);
  return (
    <div className="shadow-xl p-3 rounded-xl">
      <div className="relative">
        <img src={image} alt="" className="rounded-lg w-full" />

        <div className="absolute shadow-lg p-2 bg-white md:left-[15%] rounded-md lg:left-[20%] -bottom-5">
          <h1 className="mx-12 text-xl font-bold ">{service_name}</h1>
        </div>
      </div>
      <p className="p-4 mt-6">
        {isShow ? service_details : service_details?.slice(0, 97)}
        <span
          onClick={() => setShow(true)}
          className={isShow ? "hidden" : "text-rose-700"}
        >
          {" "}
          read more...
        </span>
      </p>
    </div>
  );
};

export default ServiceCard;
