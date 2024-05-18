import { PRICE } from '@prisma/client';
import Link from 'next/link';

export default function SideBar({
  locations,
  cuisines,
  searchParams,
}) {
  return (
    <div className='rtl w-1/5'>
      <div className='flex flex-col border-b pb-4'>
        <h1 className='mb-2 p-2 bg-red-600 text-white rounded'>
          استان
        </h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            className='font-light text-reg capitalize p-2 hover:bg-red-300 duration-150'
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className='flex flex-col border-b pb-4 mt-3'>
        <h1 className='mb-2 p-2 bg-red-600 text-white rounded'>
          مدل غذا
        </h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className='font-light text-reg capitalize p-2 hover:bg-red-300 duration-150'
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2 p-2 bg-red-600 text-white rounded'>
          قیمت
        </h1>
        <div className='flex'>
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                price: PRICE.CHEAP,
              },
            }}
            className='border w-full text-reg font-light rounded-l p-2 hover:bg-red-300 duration-150'
          >
            $
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                price: PRICE.REGULAR,
              },
            }}
            className='border-r border-t border-b w-full text-reg font-light p-2 hover:bg-red-300 duration-150'
          >
            $$
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                price: PRICE.EXPENSIVE,
              },
            }}
            className='border-r border-t border-b w-full text-reg font-light p-2 rounded-r hover:bg-red-300 duration-150'
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
}
