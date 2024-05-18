'use client';

import { useState } from 'react';
import {
  partySize as people,
  times,
} from '../../../../data';
import DatePicker from 'react-datepicker';
import useAvailability from '../../../../hooks/useAvailability';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import { convertToDisplayTime } from '../../../../utils/convertToDisplayTime';

export default function RestaurantReservation({
  openTime,
  closeTime,
  slug,
}) {
  const {
    loading,
    error,
    data,
    fetchAvailabilities,
  } = useAvailability();
  const [selectedDate, setSelectedDate] =
    useState(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState(2);
  const [day, setDay] = useState(
    new Date().toISOString().split('T')[0]
  );

  const handleChangeDate = (date) => {
    if (date) {
      setDay(date.toISOString().split('T')[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const handleClick = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize,
    });
  };

  const filterTimesByOpenWindow = () => {
    const timesWithinWindow = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });
    return timesWithinWindow;
  };

  return (
    <div className='rtl fixed w-[25%] bottom-7 bg-white rounded p-3 shadow my-3'>
      <div className='text-center border-b pb-2 font-bold'>
        <h4 className='mr-7 text-lg'>
          میز خود را رزرو کنید{' '}
        </h4>
      </div>
      <div className='my-3 flex flex-col'>
        <label htmlFor=''>تعداد نفرات</label>
        <select
          name=''
          className='py-3 border-b font-light'
          id=''
          value={partySize}
          onChange={(e) =>
            setPartySize(e.target.value)
          }
        >
          {people.map((party) => (
            <option value={party.value}>
              {party.label}
            </option>
          ))}
        </select>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col w-[48%]'>
          <label htmlFor=''>روز</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            className='ltr p-2 border-b font-light text-reg w-28'
            dateFormat='MMMM d'
            wrapperClassName='w-[48%]'
          />
        </div>
        <div className='flex flex-col w-[48%]'>
          <label htmlFor=''>زمان</label>
          <select
            name=''
            id=''
            className='ltr ml-5 py-3 border-b font-light'
            value={time}
            onChange={(e) =>
              setTime(e.target.value)
            }
          >
            {filterTimesByOpenWindow().map(
              (time) => (
                <option value={time.time}>
                  {time.displayTime}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <div className='mt-5'>
        <button
          className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress color='inherit' />
          ) : (
            'مشاهده زمانهای قابل رزرو'
          )}
        </button>
      </div>
      {data && data.length ? (
        <div className='mt-4'>
          <p className='text-reg'>
            زمان مورد نظر خود را انتخاب کنید
          </p>
          <div className='rtl flex flex-wrap mt-2'>
            {data.map((time) => {
              return time.available ? (
                <Link
                  href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                  className='bg-red-600 cursor-pointer p-2 w-24 text-center text-white rounded mb-3 ml-3'
                >
                  <p className='ltr text-sm font-bold'>
                    {convertToDisplayTime(
                      time.time
                    )}
                  </p>
                </Link>
              ) : (
                <div className='cursor-not-allowed bg-gray-300 p-2 w-24 mb-3 rounded ml-3'></div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
