import Rating from "react-rating";
import {
  FaLocationDot,
  FaRegCalendar,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";

import { Link } from "react-router-dom";
const DoctorCard = ({ doctor }) => {
  const { _id, name, specialist, image, rating, available, price } =
    doctor || {};

  return (
    <div className="bg-slate-200 rounded-xl">
      <img src={image} className="rounded-xl" alt="" />
      <div className="px-4">
        <div className="my-4 border-b border-gray-300">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="text-lg ">{specialist}</p>
          <Rating
            className="text-xl"
            initialRating={rating}
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar className="text-red-400" />}
          />
        </div>

        <div>
          <span className="flex items-center  gap-3">
            <FaLocationDot />
            <p>789 Pine Lane, Dhaka</p>
          </span>
          <span className="flex items-center  gap-3">
            <FaRegCalendar />
            <p>{available}</p>
          </span>
          <span className="flex items-center  gap-3">
            <BsCurrencyDollar />
            <p>{price}</p>
          </span>
          <Link to={`/profileDetails/${_id}`}>
            <div className="text-center border border-rose-300 my-4 text-rose-400 hover:text-white hover:bg-rose-300 font-bold text-lg  p-2 rounded-lg">
              <p>View Profile</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
