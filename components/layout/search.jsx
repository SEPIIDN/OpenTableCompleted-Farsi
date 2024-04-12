import RestaurantSearch from '../restaurants/restaurant-search';

export default function Search() {
  return (
    <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
      <div className='text-center mt-10'>
        <h1 className='text-white text-5xl font-bold mb-2'>
          هر مناسبتی که دارید, میتونید رستوران
          دلخواهتون رو پیدا کنید
        </h1>
        <RestaurantSearch />
      </div>
    </div>
  );
}
