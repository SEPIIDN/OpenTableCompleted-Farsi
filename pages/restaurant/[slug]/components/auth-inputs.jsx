export default function AuthInputs({
  inputs,
  handleOnChange,
  isSignIn,
}) {
  return (
    <div>
      {isSignIn ? null : (
        <div className='my-3 flex justify-between text-sm'>
          <input
            name='firstName'
            type='text'
            className='text-right w-[49%] border rounded p-2 py-3'
            placeholder='نام'
            value={inputs.firstName}
            onChange={handleOnChange}
          />
          <input
            name='lastName'
            type='text'
            className='text-right w-[49%] border rounded p-2 py-3'
            placeholder='نام خانوادگی'
            value={inputs.lastName}
            onChange={handleOnChange}
          />
        </div>
      )}
      <div className='my-3 flex justify-between text-sm'>
        <input
          name='email'
          type='text'
          className='text-right flex-1 border rounded p-2 py-3'
          placeholder='ایمیل'
          value={inputs.email}
          onChange={handleOnChange}
        />
      </div>
      {isSignIn ? null : (
        <div className='my-3 flex justify-between text-sm'>
          <input
            name='phone'
            type='text'
            className='text-right w-[49%] border rounded p-2 py-3'
            placeholder='شماره تماس'
            value={inputs.phone}
            onChange={handleOnChange}
          />
          <input
            name='city'
            type='text'
            className='text-right w-[49%] border rounded p-2 py-3'
            placeholder='شهر'
            value={inputs.city}
            onChange={handleOnChange}
          />
        </div>
      )}
      <div className='my-3 flex justify-between text-sm'>
        <input
          name='password'
          type='password'
          className='text-right flex-1 border rounded p-2 py-3'
          placeholder='رمز عبور'
          value={inputs.password}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
