import { useGetMethod } from '@/hooks/network/useGetMethod';
import { v4 as uuidv4 } from 'uuid';

export function Partners() {
  const { data: partners } = useGetMethod('partners');
  return (
    <div
      id="partners"
      className="flex flex-col mb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 className="mb-12 pl-10 text-black text-5xl font-bold tracking-tight md:pl-0 md:text-6xl">
        Partnerzy
      </h2>
      <div className="grid gap-x-14 gap-y-16 grid-cols-2 mx-auto px-4 max-w-7xl sm:px-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {partners.map(partner => (
          <img key={uuidv4()} src={partner} alt="partner logo" />
        ))}
      </div>
    </div>
  );
}
