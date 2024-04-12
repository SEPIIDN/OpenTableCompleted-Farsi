import ReviewCard from './review-card';

export default function RestaurantReviews({
  reviews,
}) {
  return (
    <div>
      <h1 className='rtl font-bold text-3xl mt-10 mb-7 borber-b pb-5'>
        نظر {reviews.length} مشتری عزیز ما
      </h1>
      <div className='rtl'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}
