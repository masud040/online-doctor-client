import { useEffect, useState } from "react";

import ServiceCard from "../../Card/ServiceCard";
import ServiceDoctor from "./ServiceDoctor/ServiceDoctor";
import SectionTitle from "../../SectionTitle/SectionTitle";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-8">
      <div className="text-center my-12">
        <SectionTitle title="Services" subtitle="Our Department" />
        <p className="text-lg mt-6 text-gray-700 ">
          While mirth large of on front. Ye he greater related adapted proceed
          entered an. Through it examine express promise no. Past add size game
          cold girl off how old
        </p>
      </div>
      <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div>
        <ServiceDoctor />
      </div>
    </div>
  );
};

export default Services;
