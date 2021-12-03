import Accordion from '@/components/Accordion/Accordion';
import { useGetMethod } from '@/hooks/network/useGetMethod';

export function FAQ() {
  const { data: faqs } = useGetMethod('faqs');
  faqs.forEach((entry, id) => {
    entry.dataID = `faq-button-id-${id}`;
  });

  return (
    <div
      id="faq"
      className="flex flex-col mb-12 mx-auto max-w-7xl sm:px-6 md:flex-row lg:px-8">
      <div className="flex flex-col pl-10 w-2/5 md:pl-0">
        <h2 className="mb-4 text-black text-5xl font-bold tracking-tight md:text-6xl">
          FAQ
        </h2>
        <span className="text-black_alpha_70 text-base font-light">
          Chcesz się o coś zapytać
        </span>
        <span className="text-black_alpha_70 text-base font-light">
          Skontaktujmy się
        </span>
        <div className="flex">
          <a className="text-orange" href="mailto:contact@nowlodz.com">
            contact@nowlodz.com
          </a>
          <img
            className="ml-1"
            src="/assets/rightArrow.svg"
            alt="right arrow"
          />
        </div>
      </div>
      <Accordion accordionItems={faqs} />
    </div>
  );
}
