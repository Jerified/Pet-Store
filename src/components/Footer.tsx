// import Image from 'next/image'
// import React from 'react'

// const Footer = () => {
//     const navs = [
//         {
//             id: 1,
//             title: 'About'
//         },
//         {
//             id: 2,
//             title: 'Service'
//         },
//         {
//             id: 3,
//             title: 'Team'
//         },
//         {
//             id: 4,
//             title: 'Blog'
//         },
//         {
//             id: 5,
//             title: 'Project'
//         },
//         {
//             id: 6,
//             title: 'Contact'
//         },
//         {
//             id: 7,
//             title: 'Flow'
//         },
//     ]
//     return (
//         <footer className="bg-darkslategray">
//             <div className="container lg:px-[8rem] lg:flex-row flex flex-col gap-8 justify-between lg:h-[16rem] items-center pt-12">
//                 <div className="">
//                     <Image src='/images/Pet-First.png' className='w-[8rem] lg:w-[14.44rem]' width={100} height={100} alt='' />
//                 </div>
//                 <nav className="text-[0.88rem] lg:flex-row flex flex-col gap-[0.5rem] lg:gap-[0.75rem]">
//                 {navs.map(nav => (
//                     <div className="" key={nav.id}>
//                         <p className="tracking-[0.01em] leading-[2.63rem] text-antiquewhite font-semibold">{nav.title}</p>
//                     </div>
//                 ))}
//             </nav>
//             </div>

//         </footer>
//         // <div className="relative w-full h-[6.81rem] text-left text-[1rem] text-white font-josefin-sans">
//         //     <div className="absolute top-[0rem] left-[35.81rem] w-[33.88rem] h-[6.81rem]">
//         //         <div className="absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start gap-[0.75rem]">
//         //             <div className="flex flex-row items-start justify-start p-[0.63rem]">
//         //                 <div className="relative tracking-[0.01em] leading-[2.63rem] font-semibold">About</div>
//         //             </div>
//         //             <div className="flex flex-row items-start justify-start p-[0.63rem]">
//         //                 <div className="relative tracking-[0.01em] leading-[2.63rem] font-semibold">Project</div>
//         //             </div>
//         //             <div className="flex flex-row items-start justify-start p-[0.63rem]">
//         //                 <div className="relative tracking-[0.01em] leading-[2.63rem] font-semibold">Service</div>
//         //             </div>
//         //             <div className="flex flex-row items-start justify-start p-[0.63rem]">
//         //                 <div className="relative tracking-[0.01em] leading-[2.63rem] font-semibold">Client</div>
//         //             </div>
//         //             <div className="flex flex-col items-start justify-start p-[0.63rem]">
//         //                 <div className="relative tracking-[0.01em] leading-[2.63rem] font-semibold">Team</div>
//         //             </div>
//         //             <div className="flex flex-col items-start justify-start p-[0.63rem]">
//         //                 <div className="relative tracking-[0.01em] leading-[2.63rem] font-semibold">Blog</div>
//         //             </div>
//         //             <div className="flex flex-row items-start justify-start p-[0.63rem]">
//         //                 <div className="relative tracking-[0.01em] leading-[2.63rem] font-semibold">Contact</div>
//         //             </div>
//         //         </div>
//         //         <img className="absolute h-[32.8%] w-[25.65%] top-[64.05%] right-[59.23%] bottom-[3.15%] left-[15.13%] max-w-full overflow-hidden max-h-full" alt="" src="Group 143725887.svg" />
//         //         <div className="absolute top-[4.19rem] left-[0.81rem] text-[1.25rem] tracking-[0.01em] leading-[2.63rem] font-semibold">Flow</div>
//         //     </div>
//         //     <img className="absolute top-[1.81rem] left-[0rem] w-[14.44rem] h-[2.81rem]" alt="" src="Pet-First.svg" />
//         // </div>
//     )
// }

// export default Footer

import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="flex flex-col bg:flex-row bg-darkslategray bg-no-repeat bg-cover items-center lg:items-start justify-center  p-16 py-[7rem] lg:py-[5rem] gap-y-10 pt- lg:gap-y-5">
      <div className="items-center flex text-orangered">
        <a href="#" className="text-4xl font-semibold">
          Pet-First
        </a>
      </div>
      <ul className="text-lg flex items-center  text-white gap-x-5">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a
            href="https://github.com/Jerified?tab=repositories"
            target="_blank"
          >
            Project
          </a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="text-white flex items-center  gap-x-5">
        <a href="https://github.com/Jerified" target="_blank">
          <FaGithub size={35} />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <FaInstagram size={35} />
        </a>
        <a href="mailto:oyedelejeremiah.ng@gmail.com" target="_blank">
          <AiOutlineMail size={35} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
