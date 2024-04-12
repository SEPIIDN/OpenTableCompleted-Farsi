'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RestaurantSearch() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  return (
    <div className='text-left text-lg py-3 m-auto flex justify-center'>
      <button
        className='rounded bg-red-600 px-9 py-2 text-white'
        onClick={() => {
          router.push(`/search?city=${location}`);
          setLocation('');
        }}
      >
        جستجو
      </button>
      <input
        className='text-right rounded  ml-3 p-2 w-[450px]'
        type='text'
        placeholder='شهر یا استان'
        onChange={(e) =>
          setLocation(e.target.value)
        }
        value={location}
      />
    </div>
  );
}
