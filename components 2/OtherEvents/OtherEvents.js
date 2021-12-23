import { useGetMethod } from '@/hooks/network/useGetMethod';
import { useRouter } from 'next/router';
import { getUserFriendlyURI } from '@/components/Events/getUserFriendlyURI.utils';

export function OtherEvents() {
  const router = useRouter();
  const { data: events } = useGetMethod('events');
  const otherEvents = events?.filter(event => !event.isHighlighted);

  return (
    <div className="relative mb-24 text-black">
      <div className="absolute bottom-0 flex items-end justify-between w-full h-96 invisible overflow-hidden sm:visible">
        <div className="lg:-translate-x-38 transform 3xl:-translate-x-0 2xl:-translate-x-24 -translate-x-40 md:-translate-x-48 xl:-translate-x-32">
          <img src="/assets/leftBuilding.svg" alt="#" className="block" />
        </div>
        <div className="lg:translate-x-38 transform 3xl:-translate-x-0 2xl:translate-x-24 translate-x-40 md:translate-x-48 xl:translate-x-32">
          <img src="/assets/rightBuilding.svg" alt="#" className="block" />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-8 text-center text-5xl font-bold">
          Pozostałe wydarzenia
        </span>
        <p className="mb-8 px-4 w-full text-center text-black_alpha_70 text-base font-light md:w-8/12 lg:w-5/12">
          Wybierz interesującą Cię kategorię, aby zobaczyć jakie wydarzenia na
          Ciebie czekaja!
        </p>
        <div className="w-full max-w-sm">
          {otherEvents.map(event => (
            <div
              key={event.name}
              onClick={() => {
                router.push(
                  `/events/${encodeURIComponent(
                    getUserFriendlyURI(event.name),
                  )}`,
                );
              }}
              className="my-3 p-4 w-full text-center hover:bg-orange_alpha_15 rounded-full cursor-pointer">
              <span className="text-orange text-lg font-bold">
                {event.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
