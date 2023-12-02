const Locations = () => {
  return (
    <div className="mt-8">
      <h3 className="text-3xl font-bold mb-4">Here Detail Locations</h3>
      <span className="flex items-center gap-3">
        <h4 className="text-lg font-bold">Address: </h4>
        <p>789 Pine Lane, Dhaka</p>
      </span>
      <span className="flex items-center gap-3">
        <h4 className="text-lg font-bold">City: </h4>
        <p>Dhaka</p>
      </span>
      <span className="flex items-center gap-3">
        <h4 className="text-lg font-bold">State: </h4>
        <p>North</p>
      </span>
      <span className="flex items-center gap-3">
        <h4 className="text-lg font-bold">ZipCode: </h4>
        <p>45678</p>
      </span>
      <span className="flex items-center gap-3">
        <h4 className="text-lg font-bold">Country: </h4>
        <p>Bangladesh</p>
      </span>
    </div>
  );
};

export default Locations;
