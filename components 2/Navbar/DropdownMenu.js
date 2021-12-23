import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export function DropdownMenu({ menuItems, buttonLabel, pathname }) {
  const router = useRouter();
  const isCurrentPath = router.pathname.includes(pathname);

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={clsx(
              open ? 'text-orange' : 'text-gray-500',
              'group inline-flex items-center hover:text-orange text-base font-medium bg-white rounded-md focus:outline-none transition duration-150 ease-in-out',
            )}>
            <span
              className={clsx(isCurrentPath && 'text-orange', 'outline-none')}>
              {buttonLabel}
            </span>
            <ChevronDownIcon
              className={clsx(
                open ? 'text-orange' : 'text-gray-400',
                'ml-2 w-5 h-5 group-hover:text-orange transform transition duration-150 ease-in-out',
                open && 'rotate-180',
                isCurrentPath && 'text-orange',
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 px-2 max-w-md whitespace-nowrap transform sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-dropDownMenu overflow-hidden ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                  {menuItems.map(item => (
                    <div
                      key={item.name}
                      onClick={() => {
                        router
                          .push(`/${pathname}/${encodeURIComponent(item.id)}`)
                          .then(close);
                      }}
                      className="group flex items-start -m-3 p-3 pl-0 rounded-lg cursor-pointer">
                      <div className="flex ml-4">
                        <p className="text-gray-900 group-hover:text-orange text-base font-medium">
                          {item.name}
                        </p>
                        <img
                          src="/assets/rightArrow.svg"
                          alt="rightArrow"
                          className="self-center ml-2 w-auto h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition duration-150 ease-in-out"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
