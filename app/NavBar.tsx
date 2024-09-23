"use client";
import { Box } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiSaloon } from "react-icons/gi";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  // console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Saloons", href: "/saloons/list" },
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
          <li key={link.href}>
            <Link
              className={classNames({
                "text-green-600": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-900": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Logout</Link>
        )}
        {status === "unauthenticated" && <Link href='/api/auth/signin'>Login</Link>}
      </Box>
    </nav>
  );
};

export default NavBar;
