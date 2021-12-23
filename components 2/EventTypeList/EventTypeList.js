import { v4 as uuidv4 } from 'uuid';
import { Event } from '@/components/Events/Event';

export function EventTypeList({ events }) {
  return (
    <div className="mx-0 my-12 max-w-7xl space-y-24 sm:mx-4 sm:my-24 md:mx-12">
      {events?.map(event => (
        <Event key={uuidv4()} singleEvent={event} />
      ))}
    </div>
  );
}
