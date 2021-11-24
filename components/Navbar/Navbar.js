import { Popover } from '@headlessui/react';
import { Logo } from '../Logo';
import { DropdownMenu } from './DropdownMenu';
import { MobileDrawer } from './MobileDrawer';
import { NavbarLink } from '@/components/Navbar/NavbarLink';
import { useGetMethod } from '@/hooks/network/useGetMethod';

export function Navbar() {
  const { data: organizations } = useGetMethod('organizations');
  const { data: events } = useGetMethod('events');

  return (
    <Popover className="relative bg-white">
      {({ close }) => (
        <div className="mx-auto px-4 max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:flex-1 lg:w-0">
              <Logo />
            </div>
            <MobileDrawer closeMenu={close} />
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <DropdownMenu
                menuItems={organizations}
                buttonLabel="Organizacje"
                pathname="organization"
              />
              <DropdownMenu
                menuItems={events}
                buttonLabel="Wydarzenia cykliczne"
                pathname="events"
              />
              {/*Temporary hidden until feature/facebook-feed is complete  */}
              {/* <NavbarLink hashId="facebook_feed">#nowLDZ</NavbarLink> */}
              <NavbarLink hashId="faq">FAQ</NavbarLink>
              <NavbarLink hashId="partners">Partnerzy</NavbarLink>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="mr-2 text-gray-500 whitespace-nowrap text-base font-medium">
                <img
                  src="/assets/facebook.svg"
                  alt="facebook"
                  className="w-auto h-10"
                />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 whitespace-nowrap text-base font-medium">
                <img
                  src="/assets/twitter.svg"
                  alt="twitter"
                  className="w-auto h-10"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </Popover>
  );
}
