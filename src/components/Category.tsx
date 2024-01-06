'use client'
// import React from 'react'
// import Image from 'next/image'

// const Category = () => {
//     const pets = [
//         {
//             id: 1,
//             img: '/images/pets/pet4.png'
//         },
//         {
//             id: 2,
//             img: '/images/pets/pet5.png'
//         },
//         {
//             id: 3,
//             img: '/images/pets/pet6.png'
//         },
//         {
//             id: 4,
//             img: '/images/pets/pet7.png'
//         },
//         {
//             id: 5,
//             img: '/images/pets/pet8.png'
//         }
//     ]

//     const pets2 = [
//         {
//             id: 6,
//             img: '/images/pets/pet9.png'
//         },
//         {
//             id: 7,
//             img: '/images/pets/pet10.png'
//         },
//         {
//             id: 8,
//             img: '/images/pets/pet11.png'
//         },
//         {
//             id: 9,
//             img: '/images/pets/pet12.png'
//         },
//         {
//             id: 10,
//             img: '/images/pets/pet13.png'
//         },
//     ]
//     return (
//         <section className=" bg-orangered w-full h-[20rem]  bottom-0 mt-20">
//             <div className="grid flex-row place-items-center lg:px-[8rem] lg:pr-0 h-full relative">
//                 <Image className="absolute top-[1.5rem] pt- left-[0rem] w-[5rem] md:w-[8rem] h-[5rem] md:h-[9rem] overflow-hidden" alt="" src='/images/Frame.png' width={60} height={60} />
//                 <div className="lg:flex-row w-full flex flex-col-reverse items-center  lg:pl-[-2rem">
//                     <div className="w-full justify-cente  flex ">
//                         <Image className="lg:max-w-full" alt="" src='/images/45+.png' width={200} height={200} />
//                     </div>
//                     <div className="flex flex-col gap-2 ">
//                         <div className="flex gap-3">
//                             {pets.map((pet, idx) => (
//                                 <React.Fragment key={pet.id}>
//                                     <div className={`w-full`} >
//                                         <Image className="lg:w-[12rem] w-[6rem]" alt="" src={pet.img} width={200} height={200} />
//                                         {/* {pet.id === 5 && <br />} */}
//                                     </div>

//                                 </React.Fragment>
//                             ))}
//                             </div>
//                             <div className="flex gap-3">
//                                 {pets.map((pet, idx) => (
//                                     <React.Fragment key={pet.id}>
//                                         <div className={`w-full`} >
//                                             <Image className="lg:w-[12rem] w-[6rem]" alt="" src={pet.img} width={200} height={200} />
//                                             {/* {pet.id === 5 && <br />} */}
//                                         </div>

//                                     </React.Fragment>
//                                 ))}
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//         </section>
//     )
// }

// export default Category

import React, { useState } from "react";
import Image from "next/image";
import Pet2Img from "../../public/images/pets/2.png";
import Pet1Img from "../../public/images/pets/1.png";
import Pet3Img from "../../public/images/pets/3.png";
import Pet4Img from "../../public/images/pets/4.png";
import Pet5Img from "../../public/images/pets/5.png";
import Pet6Img from "../../public/images/pets/6.png";
import Pet7Img from "../../public/images/pets/7.png";
import Pet8Img from "../../public/images/pets/8.png";
import Pet9Img from "../../public/images/pets/9.png";
import Pet10Img from "../../public/images/pets/10.png";
import Pet11Img from "../../public/images/pets/11.png";
import Pet12Img from "../../public/images/pets/12.png";
import Badge from "../../public/images/pets/badge.svg";

const pets = [
  { id: 1, category: "cat", name: "kyba", image: Pet1Img },
  { id: 2, category: "bird", name: "rotty", image: Pet2Img },
  { id: 3, category: "fox", name: "fexxie", image: Pet3Img },
  { id: 4, category: "cat", name: "kirra", image: Pet4Img },
  { id: 5, category: "hamster", name: "dinno", image: Pet5Img },
  { id: 6, category: "parrot", name: "pico", image: Pet6Img },
  { id: 7, category: "parrot", name: "pavo", image: Pet7Img },
  { id: 8, category: "cat", name: "ynna", image: Pet8Img },
  { id: 9, category: "lion", name: "hera", image: Pet9Img },
  { id: 10, category: "bird", name: "dimmy", image: Pet10Img },
  { id: 11, category: "dog", name: "jasper", image: Pet11Img },
  { id: 12, category: "hamster", name: "syu", image: Pet12Img },
];

const Pets = () => {
  const [selectedPet, setSelectedPet] = useState<any>({
    id: 4,
    category: "cat",
    name: "kirra",
    image: Pet4Img,
  });

  const handleSelect = (id: number) => {
    const pet = pets.find((pet) => pet.id === id);
    setSelectedPet(pet);
  };

  return (
    <section
      className="
    bg-orangered bg-center py-6 overflow-hidden
    "
    >
      <div className="flex flex-col lg:flex-row">
        <div
          className="
 hidden xl:flex xl:w-[30%] xl:pl-[160px]
        "
        >
          <Image src={Badge} alt="badge-img" draggable="false" />
        </div>
        <div className="flex-1 py-5 gap-y-8 flex flex-col lg:flex-row lg:items-center">
          {/* selected Pets */}
          <div className="flex flex-col items-center flex-1  gap-2">
            <h1 className="text-white text-4xl font-bold text-center gap-1 flex items-center">
              {selectedPet.category}
              <span className="text-white text-xl font-normal">
                ({selectedPet.name})
              </span>
            </h1>
            <Image
              src={selectedPet.image}
              alt="selected pet"
              className="w-1/4 object-cover border-4 rounded-full"
              draggable="false"
            />
          </div>
          <div className="flex flex-wrap  gap-4 justify-evenly lg:justify-end flex-1  px-2 lg:px-5">
            {pets.map((pet) => {
              return (
                <div
                  className="relative cursor-pointer"
                  key={pet.id}
                  onClick={() => handleSelect(pet.id)}
                >
                  <div
                    className={`${
                      selectedPet.id !== pet.id && "bg-black/40 hover:bg-none"
                    } w-full absolute  h-full rounded-full hover:scale-110 transition`}
                  ></div>
                  <Image
                   className={`${
                    selectedPet.id !== pet.id && "hover:scale-110 transition"
                  } `}
                    src={pet.image}
                    width={95}
                    height={95}
                    draggable="false"
                    alt=''
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
