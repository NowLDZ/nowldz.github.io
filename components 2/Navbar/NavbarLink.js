import { useRouter } from 'next/router';

export function NavbarLink({ hashId, children }) {
  const router = useRouter();
  const scrollTo = hashId => {
    const element = document.getElementById(hashId);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  const handleClick = () => {
    if (router.pathname !== '/') {
      router.push('/').then(() => setTimeout(() => scrollTo(hashId), 500));
    } else {
      scrollTo(hashId);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="text-gray-500 hover:text-orange text-base font-medium cursor-pointer">
      {children}
    </div>
  );
}
