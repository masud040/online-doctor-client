const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className="grid grid-cols-1 mt-8 md:grid-cols-3 gap-4">
      {reviews?.map((review, ind) => (
        <div key={ind} className="bg-blue-200 p-3 rounded-lg">
          <h1 className="text-lg font-semibold">{review?.user}</h1>
          <p className="text-sm mt-2">{review?.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
