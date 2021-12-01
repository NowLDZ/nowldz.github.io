import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export function AccordionNavItem(props) {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={clsx(
              open ? 'text-orange' : 'text-gray-500',
              'group inline-flex items-center hover:text-orange text-base font-medium bg-white rounded-md focus:outline-none transition duration-150 ease-in-out',
            )}>
            {props.title}
            <ChevronDownIcon
              className={clsx(
                open ? 'text-orange' : 'text-gray-400',
                'ml-2 w-5 h-5 group-hover:text-orange transform transition duration-150 ease-in-out',
                open && 'rotate-180',
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Transition
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Disclosure.Panel className="flex grid flex-col gap-5 pt-6 px-5 bg-white">
              {props.children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
