"use client";

import { Skeleton } from "@/app/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b mb-5 px-5 py-3 bg-white shadow-lg">
      <Container>
        <Flex justify="between" align="center" className="flex-wrap">
          {/* Logo Section */}
          <Flex align="center" gap="3">
            <Link href="/">
              <Image
                className="rounded-full"
                src="/Assets/saloon-logo.jpeg"
                alt="logo"
                width={40}
                height={50}
              />
            </Link>
            {/* Hamburger Menu for Mobile */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </Flex>

          {/* Centered NavLinks on larger screens */}
          <div
            className={`lg:flex ${
              isMenuOpen ? "block" : "hidden"
            } lg:flex-grow lg:justify-center w-full lg:w-auto`}
          >
            <NavLinks />
          </div>

          {/* Authentication Status */}
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Saloons", href: "/saloons/list" },
    { label: "Users", href: "/users" },
    { label: "Employees", href: "/employees" },
    { label: "Categories", href: "/categories" },
    { label: "Services", href: "/services" },
    { label: "Reports", href: "/reports" },
    { label: "Subscriptions", href: "/subscriptions" },
  ];

  return (
    <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 items-center lg:items-center">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-green-500": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton width="3rem" />;

  if (status === "unauthenticated")
    return (
      <Link className="nav-link hidden lg:inline" href="/api/auth/signin">
        Login
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default NavBar;
