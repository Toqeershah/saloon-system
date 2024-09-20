'use client'
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiSaloon } from "react-icons/gi";

const NavBar = () => {

    const currentPath = usePathname();
    console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Saloons", href: "/saloons" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        {/* <Image
          className="rounded-full"
          src="/Assets/saloon-logo.jpeg"
          alt="logo"
          width={40}
          height={50}
        /> */}
        <GiSaloon />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
                'text-green-600' : link.href === currentPath,
                'text-zinc-500' : link.href!== currentPath,
                'hover:text-zinc-900' : true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
