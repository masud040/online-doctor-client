import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        {title}
      </h2>
      <h1 className="text-4xl font-semibold text-gray-800  w-max mx-auto pb-2 border-indigo-600 border-b-4">
        {subtitle}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
