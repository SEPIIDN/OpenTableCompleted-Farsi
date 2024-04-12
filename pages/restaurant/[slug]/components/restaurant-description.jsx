export default function RestaurantDescription({
  description,
}) {
  return (
    <div className='rtl mt-4'>
      <p className='text-lg font-light'>
        {description}
      </p>
    </div>
  );
}
