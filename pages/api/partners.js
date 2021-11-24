const partners = [
  '/assets/binar_logo.svg',
  '/assets/binar_logo.svg',
  '/assets/binar_logo.svg',
  '/assets/binar_logo.svg',
  '/assets/binar_logo.svg',
  '/assets/binar_logo.svg',
];

export default function partnersAPI(req, res) {
  res.status(200).json(partners);
}
