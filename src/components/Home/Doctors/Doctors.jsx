import DoctorCard from "../../Card/DoctorCard";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Doctors = () => {
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}/doctors`);
      return data;
    },
  });

  return (
    <div>
      <div className="text-center my-12">
        <SectionTitle title="Doctors" subtitle="Our Expert Doctors" />
        <p className="text-lg mt-6 text-gray-700 ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
