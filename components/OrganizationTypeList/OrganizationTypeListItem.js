export function OrganizationTypeListItem({
  logoUrl,
  name,
  description,
  address,
  url,
  isInEventPage,
}) {
  return (
    <div className="flex flex-col items-start items-stretch mx-auto px-4 max-w-7xl sm:px-6 md:flex-row lg:px-8">
      <img
        className="p-8 shadow-dropDownMenu"
        src={logoUrl}
        alt={`${name}-logo`}
      />
      <div className="mx-12 pt-6">
        {isInEventPage && (
          <span className="text-black_alpha_50 font-semibold">ORGANIZATOR</span>
        )}
        <h3 className="text-black text-3xl font-bold">{name}</h3>
        <p className="my-8 text-black_alpha_70 font-light">{description}</p>
        <div className="flex items-center mr-4">
          <img
            className="mr-3 rounded-full shadow-eventIcons"
            src="/assets/pin.svg"
            alt="pin"
          />
          <span className="text-black text-lg font-semibold">{address}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a
          href={url}
          onClick={() =>
            window.dataLayer.push({
              event: 'organizationSeeMore',
              category: name,
            })
          }
          className="block my-4 px-8 py-4 whitespace-nowrap bg-orange_alpha_15 rounded-full md:my-0">
          <span className="text-orange text-lg font-bold">Zobacz więcej</span>
        </a>
      </div>
    </div>
  );
}
