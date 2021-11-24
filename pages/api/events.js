// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const events = [
  {
    name: 'Ruby on Rails',
    id: 'ruby_on_rails',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit tempor, at tempor dui sagittis. Vivamus laoreet, risus.',
    isHighlighted: true,
    events: [
      {
        name: 'Łódź Ruby User Group',
        id: '1b7bed36-577a-481b-bce5-6b1bec5296cd',
        organizerId: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Każdy wtorek',
        mainPhoto:
          'https://secure.meetupstatic.com/photos/event/6/e/d/6/600_474868374.jpeg',
        additionalPhotos: [
          'https://cdn.pixabay.com/photo/2020/05/15/15/13/yawning-lion-5173895__340.jpg',
          'https://secure.meetupstatic.com/photos/event/6/e/d/6/600_474868374.jpeg',
          'https://i.ytimg.com/vi/8VEKPanujkw/maxresdefault.jpg',
        ],
        eventUrl: 'https://binarapps.com',
        category: 'Ruby on Rails',
      },
      {
        name: 'RooooooR',
        id: '509827ec-5011-4fc8-99a7-4f877869fe7f',
        organizerId: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Każda środa',
        mainPhoto:
          'https://cdn.pixabay.com/photo/2020/05/15/15/13/yawning-lion-5173895__340.jpg',
        eventUrl: 'https://binarapps.com',
        category: 'Ruby on Rails',
      },
    ],
  },
  {
    name: 'Design',
    id: 'design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit tempor, at tempor dui sagittis. Vivamus laoreet, risus.',
    isHighlighted: true,
    events: [
      {
        name: '[BATONY] UX/UI Meetup',
        id: 'a4cfd8e9-e223-4362-b48b-03feb88e0ccf',
        organizerId: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Każdy czwartek',
        mainPhoto: 'https://i.ytimg.com/vi/8VEKPanujkw/maxresdefault.jpg',
        eventUrl: 'https://binarapps.com',
        category: 'Design',
      },
      {
        name: '[LEJBELE] RTV/AGD Meetup',
        id: '1abdf328-8470-425c-a331-f85d46db88ea',
        organizerId: 'cfa42996-0851-44e3-9586-9a6572638cba',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Każdy czwartek',
        mainPhoto:
          'https://www.lg.com/au/images/fridges/md05965817/gallery/GT-427HPLE_3_new.jpg',
        eventUrl: 'https://binarapps.com',
        category: 'Design',
      },
    ],
  },
  {
    name: 'Web development',
    id: 'web_development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit tempor, at tempor dui sagittis. Vivamus laoreet, risus.',
    isHighlighted: false,
    events: [
      {
        name: '[BATONY] UX/UI Meetup',
        id: 'c6acd1bc-9455-4e1c-be12-f9dd74e26fb7',
        organizerId: '94c82177-331c-4302-90b9-011eb8a06d7b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Każdy czwartek',
        mainPhoto: 'https://i.ytimg.com/vi/8VEKPanujkw/maxresdefault.jpg',
        eventUrl: 'https://binarapps.com',
        category: 'Web development',
      },
      {
        name: '[Lodówki] RTV/AGD Meetup',
        id: '5fed4848-12bd-4976-aeb9-ef2d41edbaf6',
        organizerId: '2660c03c-eda4-48f9-8cd6-5e622df72f4e',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam non nulla malesuada ultricies. Donec lobortis urna quis velit. ',
        place: 'Co-walk, Off Piotrkowska',
        time: 'Każdy czwartek',
        mainPhoto:
          'https://www.lg.com/au/images/fridges/md05965817/gallery/GT-427HPLE_3_new.jpg',
        eventUrl: 'https://binarapps.com',
        category: 'Web development',
      },
    ],
  },
];

export default function eventsAPI(req, res) {
  res.status(200).json(events);
}
