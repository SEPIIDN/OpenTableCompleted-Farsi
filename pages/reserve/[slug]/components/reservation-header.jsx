import { convertToDisplayTime } from '../../../../utils/convertToDisplayTime';
import { format } from 'date-fns-jalali';

export default function ReservationHeader({
  image,
  name,
  date,
  partySize,
}) {
  const [day, time] = date.split('T');
  return (
    <div className='rtl'>
      <h3 className='font-bold'>
        سفارش خود را نهایی کنید!
      </h3>
      <div className='mt-5 flex'>
        <img
          src={image}
          alt=''
          className='w-32 h-18 rounded'
        />
        <div className='ml-4'>
          <h1 className='text-3xl font-bold'>
            {name}
          </h1>
          <div className='flex mt-3'>
            <p className='mr-6'>
              {format(
                new Date(date),
                'ccc, LLL d'
              )}
            </p>
            <p className='ltr mr-6'>
              {convertToDisplayTime(time)}
            </p>
            <p className='mr-6'>
              {partySize} نفر
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
