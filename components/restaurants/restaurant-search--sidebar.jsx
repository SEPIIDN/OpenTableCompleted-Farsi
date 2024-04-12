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
        <h1 className='mb-2'>استان</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            className='font-light text-reg capitalize'
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className='flex flex-col border-b pb-4 mt-3'>
        <h1 className='mb-2'>مدل غذا</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className='font-light text-reg capitalize'
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2'>قیمت</h1>
        <div className='flex'>
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                price: PRICE.CHEAP,
              },
            }}
            className='border w-full text-reg font-light rounded-l p-2'
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
            className='border-r border-t border-b w-full text-reg font-light p-2'
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
            className='border-r border-t border-b w-full text-reg font-light p-2 rounded-r'
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
}
