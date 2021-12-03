import { useRouter } from 'next/router';
import { useGetMethod } from '@/hooks/network/useGetMethod';
import { OrganizationTypeListItem } from '@/components/OrganizationTypeList/OrganizationTypeListItem';
import { getUserFriendlyURI } from '@/components/Events/getUserFriendlyURI.utils';

function Event() {
  const router = useRouter();
  const { id } = router.query;
  const { data: events } = useGetMethod('events');
  const { data: organizations } = useGetMethod('organizations');

  const chosenEvent = events
    ?.reduce((acc, event) => [...acc, ...event.events], [])
    .find(event => getUserFriendlyURI(event.name) === id);

  const organizer = organizations
    ?.reduce((acc, organization) => [...acc, ...organization.companies], [])
    .find(organization => organization.id === chosenEvent?.organizerId);

  const sameCategoryEvents = events?.find(
    event => event.name === chosenEvent?.category,
  );

  const otherEvents = sameCategoryEvents?.events.filter(
    event => getUserFriendlyURI(event.name) !== id,
  );

  return (
    <div className="flex flex-col items-center px-12">
      <div className="flex flex-col items-center mb-12 mt-12 mx-auto md:mb-0 md:p-12">
        <h2 className="my-10 text-black text-5xl font-bold md:text-6xl">
          {chosenEvent?.name}
        </h2>
        <p className="max-w-lg text-center text-black_alpha_70 font-light">
          {chosenEvent?.description}
        </p>
      </div>
      <div className="flex flex-col items-start md:flex-row md:items-center">
        <div className={'px-4 py-3 bg-orange_alpha_15 rounded-full xl:mt-0'}>
          <span className="text-orange font-bold">{chosenEvent?.category}</span>
        </div>
        <div className="flex items-center my-5 md:mx-4 md:my-0">
          <img
            className="mr-3 rounded-full shadow-eventIcons"
            src="/assets/pin.svg"
            alt="pin"
          />
          <span className="text-lg font-semibold">{chosenEvent?.place}</span>
        </div>
        <div className="flex items-center">
          <img
            className="mr-3 rounded-full shadow-eventIcons"
            src="/assets/calendar.svg"
            alt="calendar"
          />
          <span className="text-lg font-semibold">{chosenEvent?.time}</span>
        </div>
      </div>
      <a
        href={chosenEvent?.eventUrl}
        className="block mt-8 px-8 py-4 whitespace-nowrap bg-orange_alpha_15 rounded-full">
        <span className="text-orange text-lg font-bold">
          Przejdź do strony wydarzenia
        </span>
      </a>
      <div className="custom-scrollbar flex my-16 pb-4 h-32 overflow-x-auto overflow-y-hidden sm:h-80">
        {chosenEvent?.additionalPhotos ? (
          chosenEvent?.additionalPhotos?.map((photo, index) => (
            <img
              className="mr-1 object-contain sm:mr-4"
              src={photo}
              alt="zdjęcie eventu"
              key={`${chosenEvent.id}_${index}`}
            />
          ))
        ) : (
          <img
            className="mr-1 sm:mr-4"
            src={chosenEvent?.mainPhoto}
            alt="zdjęcie eventu"
          />
        )}
      </div>
      <OrganizationTypeListItem isInEventPage {...organizer} />
      <h2 className="self-start mt-24 text-black text-5xl font-bold tracking-tight md:text-6xl">
        Inne eventy{' '}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-orangeLight to-orange">
          {chosenEvent?.category}
        </span>
      </h2>
      <div className="custom-scrollbar flex my-16 overflow-x-auto overflow-y-hidden">
        {otherEvents?.map(event => (
          <div className="flex flex-col" key={event.id}>
            <img
              style={{ height: 280, width: 350 }}
              className="mx-4 object-cover"
              src={event.mainPhoto}
              alt="zdjęcie eventu"
            />
            <div
              onClick={() => {
                window.dataLayer.push({
                  event: 'eventPageClick',
                  category: eventName,
                });
                router.push(
                  `/event/${encodeURI(getUserFriendlyURI(event.name))}`,
                );
              }}
              className="flex items-center mt-3">
              <span className="mx-4 hover:text-orange text-3xl font-bold cursor-pointer">
                {event.name}
              </span>
              <img
                className="h-4"
                src="/assets/rightArrow.svg"
                alt="right arrow"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
