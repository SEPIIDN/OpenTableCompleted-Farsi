import MenuCard from './menu-card';

export default function MenuDetails({ menu }) {
  return (
    <main className='rtl bg-white mt-5'>
      <div>
        <div className='text-right mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>
            منو
          </h1>
        </div>
        {menu.length ? (
          <div className='flex flex-wrap justify-between'>
            {menu.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        ) : (
          <h1 className='capitalize'>
            برای این رستوران منویی در دسترس نیست!
          </h1>
        )}
      </div>
    </main>
  );
}
