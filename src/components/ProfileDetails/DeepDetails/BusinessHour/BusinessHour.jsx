const BusinessHour = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Saturday to Monday</h2>
        <p className="text-lg font-semibold">10am to 3am</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Wednesday to Thursday</h2>
        <p className="text-lg font-semibold">12am to 6am</p>
      </div>
    </div>
  );
};

export default BusinessHour;
