import { useRouter } from 'next/router';
import { useGetMethod } from '@/hooks/network/useGetMethod';
import { OrganizationTypeList } from '@/components/OrganizationTypeList/OrganizationTypeList';
import { useSearch } from '@/hooks/useSearch';

function Organization() {
  const router = useRouter();
  const { id } = router.query;
  const { data: organizations } = useGetMethod('organizations');

  const chosenOrganization = organizations.find(
    organization => organization.id === id,
  );

  const { filteredData: filteredCompanies, searchBar } = useSearch({
    data: chosenOrganization?.companies,
    filterBy: 'name',
    searchBarPlaceholder: `Wyszukaj ${chosenOrganization?.name}`,
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mx-auto my-12 p-3 md:p-12">
        <img
          className="w-auto h-60"
          src={chosenOrganization?.img}
          alt={chosenOrganization?.name}
        />
        <h2 className="my-10 text-center text-black text-5xl font-bold md:text-left md:text-6xl">
          {chosenOrganization?.name}
        </h2>
        <p className="max-w-lg text-center text-black_alpha_70 font-light">
          {chosenOrganization?.description}
        </p>
        {searchBar}
      </div>
      <OrganizationTypeList companies={filteredCompanies} />
    </div>
  );
}

export default Organization;
