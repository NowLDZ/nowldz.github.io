export function MobileNavbarLink(props) {
  return (
    <a
      href={props.href}
      onClick={props.clickHandler}
      className="text-gray-500 hover:text-orange text-base font-medium cursor-pointer">
      {props.children}
    </a>
  );
}
