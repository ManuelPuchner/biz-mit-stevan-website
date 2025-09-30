"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto relative flex justify-between items-center p-4">
      {/* Logo */}
      <div className="logo">
        <Link href="/" className="text-2xl font-bold">
          Websters.at
        </Link>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "absolute top-full left-0 w-full overflow-hidden md:static md:w-auto transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "max-h-96 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 md:opacity-100 md:scale-100 md:max-h-full"
        )}
      >
        <ul className="flex flex-col md:flex-row md:gap-6 items-center gap-4 bg-white md:bg-transparent dark:bg-gray-900 p-4 md:p-0 shadow-md md:shadow-none">
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
          <li>
            <div className="contact-info md:hidden block">
              <Button asChild>
                <Link href="/contact">Kontakt</Link>
              </Button>
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <Button className="md:hidden z-20" onClick={handleMenuClick}>
        <Bars3Icon className="size-6" />
      </Button>

      {/* Kontakt Button */}
      <div className="contact-info hidden md:block">
        <Button asChild>
          <Link href="/contact">Kontakt</Link>
        </Button>
      </div>
    </header>
  );
}
