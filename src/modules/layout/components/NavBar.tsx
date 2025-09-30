import { Button } from "@/components/ui/button";
import Link from "next/link";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  return (
    <header className="header container mx-auto relative flex justify-between items-center p-4">
      <div className="logo">
        <Link href="/" className="text-2xl font-bold">
          Websters.at
        </Link>
      </div>
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="nav-links flex gap-4">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/leistungen">Leistungen</NavLink>
          </li>
          <li>
            <NavLink href="/about-us">Über uns</NavLink>
          </li>
          <li>
            <NavLink href="/preise">Preise</NavLink>
          </li>
        </ul>
      </nav>

      <div className="contact-info">
        <Button asChild>
          <Link href="/contact">Kontakt</Link>
        </Button>
      </div>
    </header>
  );
}
