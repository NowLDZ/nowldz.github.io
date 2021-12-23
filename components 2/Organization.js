import { useRouter } from 'next/router';
import { useGetMethod } from '@/hooks/network/useGetMethod';

export function Organization() {
  const router = useRouter();
  const { data: organizations } = useGetMethod('organizations');

  return (
    <div className="mt-36">
      <div className="mx-auto px-4 py-12 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-black text-3xl font-bold tracking-tight sm:text-6xl">
              Organizacje
            </h2>
          </div>
          <ul
            role="list"
            className="space-y-4 sm:grid sm:gap-6 sm:grid-cols-2 sm:space-y-0 lg:gap-8 lg:grid-cols-3">
            {organizations.map(organization => (
              <li
                key={organization.name}
                onClick={() => {
                  router.push({
                    pathname: '/organization/[id]',
                    query: { id: organization.id },
                  });
                }}
                className="px-6 py-10 text-center rounded-lg shadow-dropDownMenu cursor-pointer transform hover:-translate-y-4 duration-300 xl:px-10 xl:text-left">
                <img
                  className="mx-auto w-40 h-40 xl:w-56 xl:h-56"
                  src={organization.img}
                  alt=""
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="flex flex-col items-center leading-6 space-y-1">
                    <h3 className="text-black text-lg font-semibold">
                      {organization.name}
                    </h3>
                    <p className="text-center text-black_alpha_70 text-base font-light">
                      {organization.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
