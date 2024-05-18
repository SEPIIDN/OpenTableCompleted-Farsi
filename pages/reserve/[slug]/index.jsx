import { Fragment } from 'react';
import ReservationForm from './components/reservation-form';
import ReservationHeader from './components/reservation-header';
import PageTitle from './head';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';

const prisma = new PrismaClient();

export default function Reserve({ restaurant }) {
  const router = useRouter();
  return (
    <Fragment>
      <PageTitle />
      <div className='rtl border-t h-screen'>
        <div className='py-9 w-3/5 m-auto'>
          <ReservationHeader
            image={restaurant.main_image}
            name={restaurant.name}
            date={router.query.date}
            partySize={router.query.partySize}
          />
          <ReservationForm
            date={router.query.date}
            slug={router.query.slug}
            partySize={router.query.partySize}
          />
        </div>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps({
  params,
}) {
  const fetchRestaurant = async (slug) => {
    const restaurant =
      await prisma.restaurant.findUnique({
        where: {
          slug,
        },
      });
    if (!restaurant) {
      return null;
    }
    return restaurant;
  };
  const restaurant = await fetchRestaurant(
    params.slug
  );
  if (!restaurant) {
    return { notFound: true };
  }
  const formattedRestaurants = JSON.parse(
    JSON.stringify(restaurant)
  );
  return {
    props: { restaurant: formattedRestaurants },
  };
}
