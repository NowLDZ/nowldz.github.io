import { MainHeader } from '@/components/MainHeader';
import { Organization } from '@/components/Organization';
import { EventsComponent } from '@/components/Events/EventsComponent';
import { OtherEvents } from '@/components/OtherEvents/OtherEvents';
import { FAQ } from '@/components/FAQ/FAQ';
import { Partners } from '@/components/Partners';

export default function Home() {
  return (
    <>
      <MainHeader />
      <Organization />
      <EventsComponent />
      <OtherEvents />
      <FAQ />
      <Partners />
    </>
  );
}
