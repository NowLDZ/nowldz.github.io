import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Logo } from '../Logo';
import { useGetMethod } from '@/hooks/network/useGetMethod';
import { NavbarLink } from '@/components/Navbar/NavbarLink';
import { MobileNavbarLink } from '@/components/Navbar/MobileNavbarLink';
import { useRouter } from 'next/router';
import { AccordionNavItem } from './AccordionNavItem';

export function MobileDrawer(props) {
  const router = useRouter();

  const { data: organizations } = useGetMethod('organizations');
  const { data: events } = useGetMethod('events');

  return (
    <>
      <div className="-mr-2 -my-2 md:hidden">
        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Popover.Panel
          focus
          className="absolute z-10 inset-x-0 top-0 p-2 transform origin-top-right transition md:hidden">
          <div className="bg-white rounded-lg shadow-lg divide-gray-50 divide-y-2 ring-1 ring-black ring-opacity-5">
            <div className="pb-6 pt-5 px-5">
              <div className="flex items-center justify-between">
                <Logo />
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <AccordionNavItem title="Organizacje">
                    {organizations.map(item => (
                      <MobileNavbarLink
                        key={item.name}
                        href={item.href}
                        clickHandler={() => {
                          router
                            .push(
                              `/organization/${encodeURIComponent(item.id)}`,
                            )
                            .then(props.closeMenu);
                        }}>
                        {item.name}
                      </MobileNavbarLink>
                    ))}
                  </AccordionNavItem>
                  <AccordionNavItem title="Wydarzenia cykliczne">
                    {events.map(item => (
                      <MobileNavbarLink
                        key={item.name}
                        href={item.href}
                        clickHandler={() => {
                          router
                            .push(`/events/${encodeURIComponent(item.id)}`)
                            .then(props.closeMenu);
                        }}>
                        {item.name}
                      </MobileNavbarLink>
                    ))}
                  </AccordionNavItem>
                  {/*Temporary hidden until feature/facebook-feed is complete  */}
                  {/* <div
                  onClick={() => scrollTo('facebook_feed')}
                  className="text-gray-500 hover:text-gray-900 text-base font-medium">
                  #nowLDZ
                </div> */}
                  <NavbarLink hashId="faq">FAQ</NavbarLink>
                  <NavbarLink hashId="partners">Partnerzy</NavbarLink>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );
}
