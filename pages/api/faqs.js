export const faqs = [
  {
    title: 'O co chodzi w tym hashtag\'u?',
    description:
      'Hashtag #nowLDZ jest otwartą platformą (każdy może nim oznaczyć swoją aktywność w Social Mediach) służącą promocji i integracji łódzkiego środowiska związanego IT. Jest też bazą rozwojowych eventów i firm o łódzkim rodowodzie.',
  },
  {
    title: 'Chcę dodać firmę / wydarzenie - jak to zrobić?',
    description:
      'Napisz do nas na contact@nowlodz.com. Zawrzyj tytuł / nazwę, opis, terminy i odpowiednie linki i zdjęcia.',
  },
  {
    title: 'Widzę niaktualne informacje, gdzie je zgłosić?',
    description:
      'Daj nam znać mailem na contact@nowlodz.com',
  },
  {
    title: 'Jak mogę pomóc aby rozwijać inicjatywę #nowLDZ?',
    description:
      'Potrzebujemy wsparcia zarówno w rozbudowie bazy eventów i firm jak przy działaniach na naszych kanałach Social Media. Napisz do nas maila, odezwij się na Facebook\'u lub wpadnij na OpenCoffe.',
  },
  {
    title: 'Czy jest to oficjalna strona miasta?',
    description:
      'Nie, jest to oddolna inicjatywa łodzian z lokalnych środowisk IT którzy chcą dołożyc swoją cegiełkę do rozwoju naszego miasta.',
  },
];

export default function faqsAPI(req, res) {
  res.status(200).json(faqs);
}
