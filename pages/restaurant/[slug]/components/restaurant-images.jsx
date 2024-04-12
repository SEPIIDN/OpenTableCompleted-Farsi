export default function RestaurantImages({
  images,
}) {
  return (
    <div>
      <h1 className='rtl font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        {images.length} عکس
      </h1>
      <div className='rtl flex flex-wrap'>
        {images.map((image) => (
          <img
            key={`${image}`}
            className='w-56 h-44 mr-1 mb-1'
            src={image}
          />
        ))}
      </div>
    </div>
  );
}
