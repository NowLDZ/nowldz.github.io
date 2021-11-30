// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const events = [
  {
    name: 'Web',
    id: 'web',
    description:
      'Wszystko co jest związane z web developmentem. Od backendu poprzez QA aż do frontendu.',
    isHighlighted: true,
    events: [
      {
        name: 'Łódź Ruby User Group',
        id: '1b7bed36-577a-481b-bce5-6b1bec5296cd',
        organizerId: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Platforma wymiany wiedzy dla doświadczonych oraz dla początkujących. Przyjdź, posłuchaj, wypowiedz się. Twórz z nami łódzką społeczność programistów Ruby. Rozmawiamy o technologii i kodzie, ale poruszamy też miękkie tematy bliskie wszystkim pracującym w IT. Prezentacje, dyskusje i networking przy piwie.',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Drugi czwartek miesiąca o 18:00',
        mainPhoto:
          'https://secure.meetupstatic.com/photos/event/6/e/d/6/600_474868374.jpeg',
        additionalPhotos: [
          'https://cdn.pixabay.com/photo/2020/05/15/15/13/yawning-lion-5173895__340.jpg',
          'https://secure.meetupstatic.com/photos/event/6/e/d/6/600_474868374.jpeg',
          'https://i.ytimg.com/vi/8VEKPanujkw/maxresdefault.jpg',
        ],
        eventUrl: 'https://www.facebook.com/lodzrug/',
        category: 'Web',
      },
      {
        name: 'JUG',
        id: '509827ec-5011-4fc8-99a7-4f877869fe7f',
        organizerId: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'JUG Łódź is an association of Java architects, developers and enthusiasts from Łódź, Poland. Members of the association are mostly practicing professionals working in one of Poland’s biggest cities with a strong IT sector.',
        place: 'Lokalizacja zmienna',
        time: 'Trzeci czwartek miesiąca o 18:00',
        mainPhoto:
          'https://secure.meetupstatic.com/photos/event/b/c/9/1/clean_451848273.jpeg',
        eventUrl: 'https://www.meetup.com/pl-PL/Java-User-Group-Lodz/events/',
        category: 'Web',
      },
    ],
  },
  {
    name: 'Design',
    id: 'design',
    description:
      'Od dobrego UXa do zachwycający design.',
    isHighlighted: false,
    events: [
      {
        name: '[BATONY] UX/UI Meetup',
        id: 'a4cfd8e9-e223-4362-b48b-03feb88e0ccf',
        organizerId: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Meetup organizowany przez @HTD w Łodzi. Dla wszystkich zainteresowanych tematyką projektowania UX i UI, niezależnie od stażu i doświadczenia!',
        place: 'Internet',
        time: 'Każdy czwartek',
        mainPhoto: 'https://i.ytimg.com/vi/8VEKPanujkw/maxresdefault.jpg',
        eventUrl: 'https://www.facebook.com/batonymeetup/',
        category: 'Design',
      },
    ],
  },
  {
    name: 'Mobile',
    id: 'mobile',
    description:
      'Wszystko wokół iOSa i Androida.',
    isHighlighted: true,
    events: [
      {
        name: 'Ł_APP ',
        id: 'c6acd1bc-9455-4e1c-be12-f9dd74e26fb7',
        organizerId: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Ł_APP! to nowy, cykliczny meetup dla wszystkich zainteresowanych tematyką mobile. Jesteśmy ponad podziałami – zajmujemy się zarówno Androidem, jak i iOS. Poruszamy wszystkie aspekty związane z tworzeniem aplikacji mobilnych! ',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Pierwszy czwartek miesiąca',
        mainPhoto: 'https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.6435-9/79358341_103255794501083_7457930802190352384_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=r7a706EwUK0AX9TWp9n&_nc_ht=scontent.fwaw6-1.fna&oh=a32eaebd12f2b0a81397fcda0661dac9&oe=61CB25EF',
        eventUrl: 'https://www.facebook.com/LAPPmeetup/',
        category: 'Mobile',
      },
      {
        name: 'Łódź wiOSłuje',
        id: '5fed4848-12bd-4976-aeb9-ef2d41edbaf6',
        organizerId: '2660c03c-eda4-48f9-8cd6-5e622df72f4e',
        description:
          'The best place for iOS developers based in Łódź. A group with monthly meetings with tech talks, fantastic speakers and unbeatable atmosphere!',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Pierwsza środa miesiąca',
        mainPhoto:
          'https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.18169-9/11307_553787884754598_2309290995043618467_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=vE3z-kgSaK0AX8pY4x0&_nc_ht=scontent.fwaw6-1.fna&oh=5a72e30d8ce2d46c0e6f469d09f13c73&oe=61CC9DCF',
        eventUrl: 'https://www.facebook.com/lodzwiosluje',
        category: 'Mobile',
      },
    ],
  },
  {
    name: 'Biznes',
    id: 'biznes',
    description:
      '',
    isHighlighted: false,
    events: [
      {
        name: 'OpenCoffee ',
        id: 'c6acd1bc-9455-4e1c-be12-f9dd79865fb7',
        organizerId: '94c82177-331c-4302-90b9-017192a06d7b',
        description:
          'Rano, przy dobrej kawie i śniadaniu rozpoczynamy dzień ciekawym, startupowpo-technologicznym netoworkingiem. OpenCoffee to regularnie spotkanie w gronie przedsiębiorców technologicznych oraz tych co jeszcze myślą o odpaleniu swojego projektu. ',
        place: 'Kawiarnia Przędza, Piotrkowska 117',
        time: 'Co drugi piątek',
        mainPhoto: 'https://scontent.fwaw6-1.fna.fbcdn.net/v/t39.30808-6/s960x960/260544029_4924089034303136_3708863022726661845_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=340051&_nc_ohc=ZXZMNkUVXgkAX8fKOd2&tn=nDUHJ0LEAr5wwOJD&_nc_ht=scontent.fwaw6-1.fna&oh=c78909f789a255964a3ec02aca6b234a&oe=61AAB2B1',
        eventUrl: 'https://www.facebook.com/groups/OpenCoffeeLodz',
        category: 'Biznes',
      },
    ],
  },
];

export default function eventsAPI(req, res) {
  res.status(200).json(events);
}
