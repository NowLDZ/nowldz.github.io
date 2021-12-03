import { useRouter } from 'next/router';
import { useGetMethod } from '@/hooks/network/useGetMethod';
import { useSearch } from '@/hooks/useSearch';
import { EventTypeList } from '@/components/EventTypeList/EventTypeList';
import { getUserFriendlyURI } from '@/components/Events/getUserFriendlyURI.utils';

function Events() {
  const router = useRouter();
  const { id } = router.query;
  const { data: events } = useGetMethod('events');

  const chosenEventType = events.find(
    event => getUserFriendlyURI(event.name) === id,
  );

  console.warn(id, events);

  const { filteredData: filteredEvents, searchBar } = useSearch({
    data: chosenEventType?.events,
    filterBy: 'name',
    searchBarPlaceholder: `Wyszukaj ${chosenEventType?.name}`,
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mx-auto my-4 p-3 md:my-12 md:p-12">
        <h2 className="my-10 text-center text-black text-5xl font-bold md:text-left md:text-6xl">
          {chosenEventType?.name}
        </h2>
        <p className="max-w-lg text-center text-black_alpha_70 font-light">
          {chosenEventType?.description}
        </p>
        {searchBar}
      </div>
      <EventTypeList events={filteredEvents} />
    </div>
  );
}

export default Events;
