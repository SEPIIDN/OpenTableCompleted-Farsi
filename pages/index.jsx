import RestaurantCard from '../components/restaurants/restaurant-card';
import PageTitle from './head';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home({ restaurants }) {
  return (
    <main className='bg-gray-100 min-h-screen w-fit'>
      <PageTitle />
      <div className='py-3 px-40 mt-10 flex flex-wrap justify-center flex-row-reverse items-center'>
        {restaurants ? (
          restaurants
            .sort((a, b) => b.rating - a.rating)
            .map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                main_image={restaurant.main_image}
                cuisine={restaurant.cuisine}
                slug={restaurant.slug}
                location={restaurant.location}
                price={restaurant.price}
                reviews={restaurant.reviews}
              />
            ))
        ) : (
          <p>درحال بارگذاری...</p>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const restaurants =
    await prisma.restaurant.findMany({
      select: {
        id: true,
        name: true,
        main_image: true,
        slug: true,
        price: true,
        location: true,
        cuisine: true,
        reviews: true,
      },
    });
  const formattedRestaurants = JSON.parse(
    JSON.stringify(restaurants)
  );

  return {
    props: { restaurants: formattedRestaurants },
  };
}
