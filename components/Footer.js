import { useRouter } from 'next/router';

/* This example requires Tailwind CSS v2.0+ */
const socials = [
  {
    name: 'Facebook',
    href: '#',
    icon: () => <img src="/assets/facebook_footer.svg" alt="logo white" />,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: () => <img src="/assets/twitter_footer.svg" alt="logo white" />,
  },
];

const navigation = [
  {
    name: 'Polityka prywatności',
    pathname: '/privacy-policy',
  },
  {
    name: 'Regulamin',
    pathname: '/statute',
  },
  {
    name: 'O nas',
    pathname: '/about-us',
  },
];

export function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className="relative">
        <div className="w-full h-28 bg-footer-city bg-repeat-x" />
        <div className="px-4 py-12 w-full bg-black sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mx-auto max-w-7xl sm:px-6 md:flex md:flex-row md:justify-between lg:px-8">
            <img
              className="self-center pb-6 md:order-1 md:pb-0"
              src="/assets/logo.svg"
              alt="logo white"
            />
            <div className="flex justify-center pb-6 space-x-6 md:order-4 md:pb-0">
              {socials.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center md:flex-row md:order-3 md:space-x-6">
              {navigation.map(item => (
                <a
                  key={item.name}
                  onClick={() => {
                    router.push({
                      pathname: item.pathname,
                    });
                  }}>
                  <span className="hover:text-gray-500 text-white text-sm font-semibold cursor-pointer">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-8 md:order-2 md:mt-0">
              <p className="text-center text-gray-400 text-sm">
                Copyright &copy; 2021. Wszystkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
