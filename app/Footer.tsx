// // import React from 'react'

// // const Footer = () => {
// //   return (
// //     <div>Footer</div>
// //   )
// // }

// // export default Footer

// import Image from "next/image";
// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-400 text-black py-6">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Social Icons */}
//         <div className="flex space-x-4 mb-4 md:mb-0">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//           >
//             <FaFacebookF className="text-black hover:text-gray-600 transition-colors duration-300" />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Twitter"
//           >
//             <FaTwitter className="text-black hover:text-gray-600 transition-colors duration-300" />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//           >
//             <FaInstagram className="text-black hover:text-gray-600 transition-colors duration-300" />
//           </a>
//         </div>

//         <div className="flex items-center gap-2">
//           <Image
//             className="rounded-full"
//             src="/Assets/saloon-logo.jpeg"
//             alt="logo"
//             width={40}
//             height={50}
//           />
//           <p className="text-black font-bold">Saloon System</p>
//         </div>

//         {/* Copyright */}
//         <p className="text-black font-bold">
//           &copy; {currentYear} All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-400 text-black py-6">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0 px-4 lg:px-0">
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-black hover:text-gray-600 transition-colors duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-black hover:text-gray-600 transition-colors duration-300" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-black hover:text-gray-600 transition-colors duration-300" />
          </a>
        </div>

        {/* Logo and Saloon Name */}
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src="/Assets/saloon-logo.jpeg"
            alt="logo"
            width={40}
            height={50}
          />
          <p className="text-black font-bold text-center">Saloon System</p>
        </div>

        {/* Copyright */}
        <p className="text-black font-bold text-center">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
