import { Disclosure, Transition } from '@headlessui/react';

export function AccordionItem({ title, description, dataID }) {
  return (
    <div id={dataID}>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button className="group flex items-center justify-between px-4 py-6 w-full text-left text-black text-sm font-medium bg-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="group-hover:text-orange text-lg font-semibold">
                {title}
              </span>
              <img
                src={open ? '/assets/minus.svg' : '/assets/plus.svg'}
                alt="expand icon"
                className={`${
                  open ? ' rotate-0' : 'rotate-90'
                } transform w-10 h-10 text-purple-500 duration-100`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Disclosure.Panel className="pb-2 pt-4 px-4 text-black_alpha_70 text-base font-light">
                {description}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
