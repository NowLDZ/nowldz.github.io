import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <img
        className="ml-3 w-auto h-8 cursor-pointer sm:h-10"
        src="/assets/logo.svg"
        alt=""
      />
    </Link>
  );
};
