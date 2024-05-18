'use client';

import { useEffect, useState } from 'react';
import useReservation from '../../../../hooks/useReservation';
import { CircularProgress } from '@mui/material';

export default function ReservationForm({
  date,
  slug,
  partySize,
}) {
  const [day, time] = date.split('T');
  const [inputs, setInputs] = useState({
    bookerFirstName: '',
    bookerLastName: '',
    bookerPhone: '',
    bookerEmail: '',
    bookerOccasion: '',
    bookerRequest: '',
  });
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false);

  const { error, loading, createReservation } =
    useReservation();

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerPhone &&
      inputs.bookerEmail
    ) {
      return setDisabled(false);
    }

    setDisabled(true);
  }, [inputs]);

  const handleChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = async () => {
    const booking = await createReservation({
      day,
      time,
      slug,
      partySize,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerPhone: inputs.bookerPhone,
      bookerEmail: inputs.bookerEmail,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequest: inputs.bookerRequest,
      setSuccess,
    });
  };

  return (
    <div className='rtl mt-10 flex flex-wrap justify-between w-[660px]'>
      {success ? (
        <div className='bg-green-400'>
          <h1 className='text-white'>
            میز شما با موفقیت رزرو شد!
          </h1>
        </div>
      ) : (
        <>
          <input
            type='text'
            className='border rounded p-3 w-80 mb-4'
            placeholder='نام'
            name='bookerFirstName'
            value={inputs.bookerFirstName}
            onChange={handleChangeInput}
          />
          <input
            type='text'
            className='border rounded p-3 w-80 mb-4'
            placeholder='نام خانوادگی'
            name='bookerLastName'
            value={inputs.bookerLastName}
            onChange={handleChangeInput}
          />
          <input
            type='text'
            className='border rounded p-3 w-80 mb-4'
            placeholder='شماره تماس'
            name='bookerPhone'
            value={inputs.bookerPhone}
            onChange={handleChangeInput}
          />
          <input
            type='text'
            className='border rounded p-3 w-80 mb-4'
            placeholder='ایمیل'
            name='bookerEmail'
            value={inputs.bookerEmail}
            onChange={handleChangeInput}
          />
          <input
            type='text'
            className='border rounded p-3 w-80 mb-4'
            placeholder='مناسبت (اختیاری)'
            name='bookerOccasion'
            value={inputs.bookerOccasion}
            onChange={handleChangeInput}
          />
          <input
            type='text'
            className='border rounded p-3 w-80 mb-4'
            placeholder='درخواست ویژه (اختیاری)'
            name='bookerRequest'
            value={inputs.bookerRequest}
            onChange={handleChangeInput}
          />
          <button
            disabled={disabled || loading}
            className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'
            onClick={handleClick}
          >
            {loading ? (
              <CircularProgress color='inherit' />
            ) : (
              'رزرو'
            )}
          </button>
          <p className='mt-4 text-sm'>
            کلیک کردن روی "رزرو" به منزله موافقت
            شما با قوانین سفره آنلاین میباشد.
          </p>
        </>
      )}
    </div>
  );
}
