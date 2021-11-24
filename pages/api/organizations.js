// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const organizations = [
  {
    name: 'Software house',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    img: '/assets/organizationImage1.svg',
    id: 'software_house',
    companies: [
      {
        logoUrl: '/assets/binar_logo.svg',
        name: 'BinarApps',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
      {
        logoUrl: '/assets/binar_logo.svg',
        name: 'Bin-Arabs',
        id: 'cfa42996-0851-44e3-9586-9a6572638cba',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
      {
        logoUrl: '/assets/binar_logo.svg',
        name: 'BejnerApaches',
        id: '2660c03c-eda4-48f9-8cd6-5e622df72f4e',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
    ],
  },
  {
    name: 'Startup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    img: '/assets/organizationImage2.svg',
    id: 'startup',
    companies: [
      {
        logoUrl: '/assets/binar_logo.svg',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        name: 'BinarApps',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
    ],
  },
  {
    name: 'Otoczenie biznesu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    img: '/assets/organizationImage3.svg',
    id: 'organizacja_wsparcia',
    companies: [
      {
        logoUrl: '/assets/binar_logo.svg',
        name: 'BinarApps',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
    ],
  },
  {
    name: 'Venture capital',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    img: '/assets/organizationImage4.svg',
    id: 'venture_capital',
    companies: [
      {
        logoUrl: '/assets/binar_logo.svg',
        name: 'BinarApps',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
    ],
  },
  {
    name: 'Akcelerator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    img: '/assets/organizationImage6.svg',
    id: 'akcelerator',
    companies: [
      {
        logoUrl: '/assets/binar_logo.svg',
        name: 'BinarApps',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
    ],
  },
  {
    name: 'Coś dodatkowego',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    img: '/assets/organizationImage5.svg',
    id: 'cos_dodatkowego',
    companies: [
      {
        logoUrl: '/assets/binar_logo.svg',
        name: 'BinarApps',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
    ],
  },
];

export default function eventsAPI(req, res) {
  res.status(200).json(organizations);
}
