import Link from 'next/link';

export default function RestaurantNavbar({
  slug,
}) {
  return (
    <nav className='flex justify-end text-reg border-b pb-2'>
      <Link
        href={`/restaurant/${slug}`}
        className='mr-7'
      >
        درباره این رستوران
      </Link>
      <Link
        href={`/restaurant/${slug}/menu`}
        className='mr-7'
      >
        منو
      </Link>
    </nav>
  );
}
