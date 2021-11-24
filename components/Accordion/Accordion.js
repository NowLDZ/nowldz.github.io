import { AccordionItem } from '@/components/Accordion/AccordionItem';
import { v4 as uuidv4 } from 'uuid';

export default function Accordion({ accordionItems }) {
  return (
    <div className="pt-16 px-4 w-full">
      <div className="mx-auto p-2 w-full max-w-2xl bg-white rounded-2xl divide-solid divide-y">
        {accordionItems.map(accordionItem => (
          <AccordionItem key={uuidv4()} {...accordionItem} />
        ))}
      </div>
    </div>
  );
}
