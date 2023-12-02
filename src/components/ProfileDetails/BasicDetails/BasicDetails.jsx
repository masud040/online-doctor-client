import Rating from "react-rating";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const BasicDetails = ({ doctorDetails }) => {
  const { name, specialist, image, rating } = doctorDetails || {};
  return (
    <div>
      <div className="md:flex items-center gap-6 bg-slate-100 p-5 rounded-md text-gray-800">
        <img src={image} alt="doctor image" className="h-80 rounded-md" />
        <div className="space-y-4 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg font-semibold">{specialist}</p>
          <div className="flex text-xl items-center gap-3">
            <Rating
              initialRating={2.5}
              emptySymbol={<FaStar className="text-2xl text-slate-400" />}
              fullSymbol={<FaStar className="text-2xl text-rose-500" />}
            />
            <p>({rating})</p>
          </div>
          <span className="flex items-center gap-2">
            <FaLocationDot className="text-rose-600 text-2xl" />
            <p className="text-lg">
              789 Pine Lane, Dhaka
              <span className="text-rose-500 font-bold"> -Get Directions</span>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
