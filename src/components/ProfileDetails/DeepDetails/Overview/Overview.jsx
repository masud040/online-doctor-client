const Overview = ({ about }) => {
  const {
    description,
    education,
    awards,
    experience,
    services,
    specification,
    specializations,
  } = about || {};

  return (
    <div className="mt-8 text-gray-600">
      <h3 className="text-xl my-2 font-bold">About Me</h3>
      <p>{description}</p>
      <div className="grid grid-cols-2 mt-6">
        <div>
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold mb-5">Education</h3>
            <li className=" font-bold">{education}</li>
            <div className="ps-5">
              <p>BDS</p>
              <p>1998-2003</p>
            </div>
          </div>
          {/* Work & experience */}
          <div>
            <h3 className="text-xl font-bold mb-5">Work & Experience</h3>
            <li className=" font-bold">{experience}</li>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold my-5">Services</h3>

            <div className="ms-5">
              {services?.map((service, ind) => (
                <li key={ind}>{service}</li>
              ))}
            </div>
          </div>
        </div>
        <div className="text-start">
          {/* Awards */}
          <div>
            <h3 className="text-xl font-bold mb-5">Awards</h3>
            <p className="ps-5">July 2023</p>
            <li className=" font-bold">{awards && awards[0]}</li>
            <div className="ps-5">
              <p>
                <p>{specification}</p>
              </p>
              <p>March 2011</p>
            </div>
            <li className=" font-bold">{awards && awards[1]}</li>
            <div className="ps-5">
              <p>{specification}</p>
              <p>May 2008</p>
            </div>
          </div>
          {/* Specializations */}
          <div>
            <h3 className="text-xl font-bold my-5">Specializations</h3>

            <div className="ms-5">
              {specializations?.map((specialization, ind) => (
                <li key={ind}>{specialization}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
