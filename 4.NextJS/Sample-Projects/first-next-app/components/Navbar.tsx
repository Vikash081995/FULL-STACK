import Link from "next/link";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/counter",
    label: "Counter",
  },
  {
    href: "/tours",
    label: "Tours",
  },
  {
    href: "/actions",
    label: "Actions",
  },
];

function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4 border-b-2">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
