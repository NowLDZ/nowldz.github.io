import { Event } from '@/components/Events/Event';
import { useGetMethod } from '@/hooks/network/useGetMethod';

export function EventsComponent() {
  const { data: events } = useGetMethod('events');
  const highlightedEvents = events?.filter(event => event.isHighlighted);

  return (
    <div className="mx-auto px-4 py-12 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-black text-3xl font-bold tracking-tight sm:text-6xl">
            Wydarzenia
          </h2>
        </div>
        <div role="list" className="w-full">
          {highlightedEvents.map(event => (
            <Event key={event.name} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
