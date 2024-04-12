export default function ReservationForm() {
  return (
    <div className='rtl mt-10 flex flex-wrap justify-between w-[660px]'>
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='نام'
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='نام خانوادگی'
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='شماره تماس'
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='ایمیل'
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='مناسبت (اختیاری)'
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='درخواست ویژه (اختیاری)'
      />
      <button className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'>
        رزرو
      </button>
      <p className='mt-4 text-sm'>
        کلیک کردن روی "رزرو" به منزله موافقت شما
        با قوانین سفره آنلاین میباشد.
      </p>
    </div>
  );
}
