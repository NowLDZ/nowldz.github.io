// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const organizations = [
  {
    name: 'Software house',
    description: 'Znajdź partnera dla twojego nowego projektu lub znajdź zespół w którym rozwiniesz skrzydła.',
    img: '/assets/organizationImage1.svg',
    id: 'software_house',
    companies: [
      {
        logoUrl: '/assets/binar_logo.svg',
        name: 'BinarApps',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Software House specjalizujący się w tworzeniu szytych na miarę aplikacji internetowych, mobilnych i tych opartych o Block Chain. Zespół 160+ specjalistów realizujący projekty dla międzynarodowych startupów oraz klientów korporacyjnych. ',
        address: 'Franklina Delano Roosevelta 6',
        url: 'https://binarapps.com',
      },
      {
        logoUrl: '/assets/org/hycom.png',
        name: 'HyCom',
        id: 'cfa42996-0851-44e3-9586-9a6572638cba',
        description:
          'Say hy to digital transformation! Find your partners in designing, developing and maintaining digital products and services. See our offer!',
        address: 'Grzegorza Piramowicza 11/13',
        url: 'https://hycom.digital',
      },
      {
        logoUrl: '/assets/org/inwedo.png',
        name: 'Inwedo',
        id: '2660c03c-eda4-48f9-8cd6-5e622df72f4e',
        description:
          'We think business and create software solutions that help you achieve more. ',
        address: 'Polskiej Organizacji Wojskowej 25',
        url: 'https://inwedo.com',
      },
      {
        logoUrl: '/assets/org/bluerank.png',
        name: 'Bluerank',
        id: '2660c03c-eda4-48f9-8cd6-5e622df72f4e',
        description:
          'Agencja marketingu internetowego. Planujemy strategicznie. Realizujemy skuteczne kampanie. Wygrywamy i rozwijamy Twój biznes.',
        address: 'Polskiej Organizacji Wojskowej 25',
        url: 'https://bluerank.pl',
      },
      {
        logoUrl: '/assets/org/osomstudio.png',
        name: 'Osomstudio',
        id: '2660c13c-eda4-48f9-8cd6-5e622df72f4e',
        description:
          'An experienced team of WordPress &amp; WooCommerce experts at your service. We build bespoke solutions for companies from the tech sector.',
        address: 'ul. Wólczańska 143',
        url: 'https://osomstudio.com',
      },
    ],
  },
  {
    name: 'Startup',
    description: 'Zobacz kto w Łodzi chce zmienić świat lub sprawdź gdzie będziesz współtworzyć kolejnego unicorna.',
    img: '/assets/organizationImage2.svg',
    id: 'startup',
    companies: [
      {
        logoUrl: '/assets/org/listonic.png',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        name: 'Listonic',
        description:
          'Lista zakupów nr 1 w Polsce. Z Listonic oszczędzisz czas i pieniądze, a Twoje zakupy staną się prostsze.',
        address: 'Piotrkowska 99',
        url: 'https://listonic.com',
      },
    ],
  },
  {
    name: 'Otoczenie biznesu',
    description: 'Wybierz wspracie spośród lokalnych księgowych, prawników i ekspertów dziedzinowych. ',
    img: '/assets/organizationImage3.svg',
    id: 'organizacja_wsparcia',
    companies: [
      {
        logoUrl: '/assets/org/none.png',
        name: '...',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: '...',
        url: '...',
      },
    ],
  },
  {
    name: 'Venture capital',
    description: 'Sprawdź kto pomoże wyskalować twój projekt oraz z kim zdobędziesz kolejną rundę finansowania. ',
    img: '/assets/organizationImage4.svg',
    id: 'venture_capital',
    companies: [
      {
        logoUrl: '/assets/org/none.png',
        name: '...',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: '...',
        url: '...',
      },
    ],
  },
  {
    name: 'Akcelerator',
    description: 'Przyśpiesz rozwój swojego projektu przy pomocy dodatkowego finansowania i wparcia mentorów.',
    img: '/assets/organizationImage6.svg',
    id: 'akcelerator',
    companies: [
      {
        logoUrl: '/assets/org/none.png',
        name: '...',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: '...',
        url: '',
      },
    ],
  },
  {
    name: 'Odkryj Łódź',
    description: 'Dowiedz się gdzie wynająć biur(k)o, zorganizować konferencję czy przeżyć coś niezwykłego.',
    img: '/assets/organizationImage5.svg',
    id: 'cos_dodatkowego',
    companies: [
      {
        logoUrl: '/assets/org/none.png',
        name: '...',
        id: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        address: '...',
        url: '...',
      },
    ],
  },
];

export default function eventsAPI(req, res) {
  res.status(200).json(organizations);
}
