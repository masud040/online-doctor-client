import doctor1 from "../../../../assets/doctor/doctor_6.jpg";
const ServiceDoctor = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:relative md:h-[500px] gap-6">
      <div className="md:w-1/2 h-full">
        <img src={doctor1} alt="" className="h-full w-full" />
      </div>
      <div className="bg-slate-100 md:absolute md:right-32 md:w-1/2 px-6  md:h-[400px] space-y-2 md:space-y-4 flex flex-col justify-center">
        <h4 className="text-teal-600 text-2xl font-bold">At Our Clinic</h4>
        <h1 className="text-3xl font-bold ">Our Doctors Specialize in you.</h1>
        <p>
          Respect forming clothes do in he. Course so piqued no an by appear.
          Themselves reasonable pianoforte so motionless he as difficulty be.
          Abode way begin ham there power whole. Suppose neither evident welcome
        </p>
        <p>
          Do unpleasing indulgence impossible to conviction. Suppose neither
          evident welcome it at do civilly uncivil. Sing tall much you get nor.
        </p>
      </div>
    </div>
  );
};

export default ServiceDoctor;
