import { OrganizationTypeListItem } from '@/components/OrganizationTypeList/OrganizationTypeListItem';
import { v4 as uuidv4 } from 'uuid';

export function OrganizationTypeList({ companies }) {
  return (
    <div className="my-24 space-y-24">
      {companies?.map(company => (
        <OrganizationTypeListItem key={uuidv4()} {...company} />
      ))}
    </div>
  );
}
