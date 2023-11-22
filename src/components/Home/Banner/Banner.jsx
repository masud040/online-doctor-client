import banner from "../../../assets/images/banner.png";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse  md:flex-row  justify-between items-center text-gray-700 gap-10">
      <div className="md:w-1/2 space-y-6 text-center md:text-start">
        <h1 className="text-4xl md:text-6xl  font-thin ">We are providing</h1>
        <h1 className="text-4xl md:text-6xl  font-bold">
          Best Medical Services
        </h1>
        <p className="text-lg md:text-xl">
          Contented continued any happiness instantly objection yet her
          allowance. Use correct day new brought tedious decay begin which.
        </p>
      </div>
      <div className="md:w-1/2">
        <img src={banner} className="w-full object-contain" alt="" />
      </div>
    </div>
  );
};

export default Banner;
