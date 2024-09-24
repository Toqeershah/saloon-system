// "use client";
// import {
//   Avatar,
//   Box,
//   Container,
//   DropdownMenu,
//   Flex,
//   Text,
// } from "@radix-ui/themes";
// import classNames from "classnames";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";
// import { GiSaloon } from "react-icons/gi";

// const NavBar = () => {
//   const currentPath = usePathname();
//   const { status, data: session } = useSession();
//   // console.log(currentPath);

//   const links = [
//     { label: "Dashboard", href: "/" },
//     { label: "Saloons", href: "/saloons/list" },
//   ];
//   return (
//     <nav className="border-b mb-5 px-5 py-3 bg-gray-200">
//       <Container>
//         <Flex justify="between">
//           <Flex align="center" gap="4">
//             <Link href="/">
//               <Image
//           className="rounded-full"
//           src="/Assets/saloon-logo.jpeg"
//           alt="logo"
//           width={40}
//           height={50}
//         />
//               {/* <GiSaloon /> */}
//             </Link>
//             <ul className="flex space-x-6">
//               {links.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     className={classNames({
//                       "text-green-600": link.href === currentPath,
//                       "text-zinc-500": link.href !== currentPath,
//                       "hover:text-zinc-900": true,
//                     })}
//                     href={link.href}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </Flex>
//           <Box>
//             {status === "authenticated" && (
//               // <Link href="/api/auth/signout">Logout</Link>
//               <DropdownMenu.Root>
//                 <DropdownMenu.Trigger>
//                   <Avatar
//                     src={session!.user!.image!}
//                     fallback="?"
//                     size="2"
//                     radius="full"
//                     className="cursor-pointer"
//                     referrerPolicy="no-referrer"
//                   />
//                 </DropdownMenu.Trigger>
//                 <DropdownMenu.Content>
//                   <DropdownMenu.Label>
//                     <Text size="2">{session.user!.email}</Text>
//                   </DropdownMenu.Label>
//                   <DropdownMenu.Item>
//                     <Link href="/api/auth/signout">Logout</Link>
//                   </DropdownMenu.Item>
//                 </DropdownMenu.Content>
//               </DropdownMenu.Root>
//             )}
//             {status === "unauthenticated" && (
//               <Link href="/api/auth/signin">Login</Link>
//             )}
//           </Box>
//         </Flex>
//       </Container>
//     </nav>
//   );
// };

// export default NavBar;

"use client";

import { Skeleton } from "@/app/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
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
import { GiSaloon } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
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
            <NavLinks />
          </Flex>
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
  ];

  return (
    <ul className="flex space-x-6">
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
      <Link className="nav-link" href="/api/auth/signin">
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
