import Link from 'next/link';
import Price from './restaurant-price';
import Star from './restaurant-star';

export default function RestaurantCard({
  slug,
  main_image,
  name,
  reviews,
  cuisine,
  price,
  location,
}) {
  return (
    <div className='rtl w-1/4 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${slug}`}>
        <img
          src={main_image}
          alt={name}
          className='w-full h-36'
        />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2 capitalize'>
            {name}
          </h3>
          <div className='rtl flex items-start'>
            <Star reviews={reviews} />
            <p className='mr-2'>
              {reviews.length} دیدگاه
            </p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className='ml-3'>{cuisine.name}</p>
            <Price price={price} />
            <p className='mr-2'>
              {location.name}
            </p>
          </div>
          {/* <p className='text-sm mt-1 font-bold'>
            Booked 3 times today
          </p> */}
        </div>
      </Link>
    </div>
  );
}
