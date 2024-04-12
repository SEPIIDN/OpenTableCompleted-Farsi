import Star from '../../../../components/restaurants/restaurant-star';
import { ratingAverageCalculator } from '../../../../utils/ratingAverageCalculator';

export default function RestaurantRating({
  reviews,
}) {
  return (
    <div className='rtl flex items-end'>
      <div className='ratings mt-2 flex items-center'>
        <Star reviews={reviews} />
        <p className='text-reg mr-3'>
          {ratingAverageCalculator(
            reviews
          ).toFixed(1)}
        </p>
      </div>
      <div>
        <p className='rtl text-reg mr-4'>
          {reviews.length} دیدگاه
        </p>
      </div>
    </div>
  );
}
