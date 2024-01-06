import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import heroBg from '../../public/images/hero-bg.png'

const Hero = () => {
    return (
        // <section className="lg:flex justify-between container lg:px-[8rem] mt-24 lg:mt-[6rem] h-[calc(100vh-228px)] lg:h-[calc(100vh-196px)] box-border">
        //     <div className="relative w-full text-left text-[3.5rem] lg:text-[6rem] sm:text-[5rem] text-darkslategray">
        //         <div className="flex relative">
        //             <div className="relative">
        //                 <div className="flex gap-1 absolute left-2 lg:left-6 top-[-4rem] lg:top-[-5rem]">
        //                     <Image className=" w-[4.09rem] h-[3.24rem] overflow-hidden" alt="" src='/images/arrowDown.svg' width={30} height={30} />
        //                     <div className=" text-[1.5rem] tracking-[0.01em] leading-[2.38rem] font-medium text-darkcyan">Available in select states</div>
        //                 </div>
        //                 <div className=" tracking-[-0.05em] leading-[4rem] sm:leading-[4.5rem] lg:leading-[5.75rem] relative  uppercase max-w-[40rem] lg:w-[49.06rem]">
        //                     <p className="">
        //                         <b className='whitespace-nowra'>{`A pet-first `}</b>
        //                         <span className="text-orangered">approach to</span>
        //                         <b> wellness</b>
        //                     </p>
        //                     <Image className="absolute right-0 lg:right-[-7rem] top-[-7rem] lg:top-[-5rem] w-[30rem  h-[20.24rem] overflow-hidden" alt="" src="/images/dashes.svg" width={200} height={50} />
        //                 </div>
                        
        //             </div>
        //             {/* <div className="hidden lg:flex"> */}
        //                 <Image src='/images/dog.png' className='absolute right-0 top-[-9rem] object-cover w-[70% h-[44rem hidden xl:flex' width={400} height={200} alt='dog-img' />
        //             {/* </div> */}
        //         </div>

        //         <div className=" rounded-[247px] bg-orangered flex flex-row items-start justify-start py-[1rem] px-[2.25rem] text-[1.25rem] w-fit mt-[7rem] lg:mt-[5rem] cursor-pointer hover:bg-darkslategray hover:text-antiquewhite transition ease-in-out">
        //             <div className="relative tracking-[0.09em] leading-[2.38rem] font-medium">Learn More</div>
        //         </div>
        //     </div>
        // </section>
        <section
        id="#"
        className="bg-antiquewhite lg:bg-hero lg:bg-cover lg:bg-no-repeat min-h-screen lg:h-[calc(100vh-196px)]"
      >
        <Navbar />
        {/* <div className=" max-w-6xl mx-auto flex justify-start items-center min-h-[400px] lg:h-[805px]">
          <div className="lg:max-w-[650px] text-center mx-auto lg:mx-0">
            <div className="hidden xl:flex mb-6 ml-5">
              <Image
                src='/images/arrowDown.svg'
                width={100}
                height={100}
                draggable="false"
                alt=''
              />
            </div>
            <h1 className="text-5xl lg:text-7xl   font-bold uppercase -tracking--[0.05em] mb-10">
              A pet first <br />{" "}
              <span className="font-normal text-orange">approch to</span> <br />{" "}
              wellness
            </h1>
            <button className="btn btn-orange mx-auto lg:mx-0">Learn more</button>
          </div>
           
        </div> */}
         <div className="relative container mx-auto w-full text-left text-[3.5rem] lg:px-[8rem] lg:text-[5.5rem] sm:text-[5rem] text-darkslategray min-h-screen flex flex-col items-centr justify-center">
                <div className="flex relative ">
                    <div className="relative">
                        <div className="flex gap-1 absolute left-2 lg:left-6 top-[-4rem] lg:top-[-5rem]">
                            <Image className=" w-[4.09rem] h-[3.24rem] overflow-hidden" alt="" src='/images/arrowDown.svg' width={30} height={30} />
                            <div className=" text-[1.5rem] tracking-[0.01em] leading-[2.38rem] font-medium text-darkcyan">Available in select states</div>
                        </div>
                        <div className=" tracking-[-0.05em] leading-[4rem] sm:leading-[4.5rem] md:leading-[5rem] lg:leading-[5.75rem] relative  uppercase md:w-[45rem] lg:w-[49.06rem]">
                            <p className="te">
                                <b className=''>{`A pet-first `}</b>
                                <span className="text-orangered">approach to</span>
                                <b> wellness</b>
                            </p>
                            {/* <Image className="absolute right-0 lg:right-[-7rem] top-[-7rem] lg:top-[-5rem] w-[30rem  h-[20.24rem] overflow-hidden" alt="" src="/images/dashes.svg" width={200} height={50} /> */}
                        </div>
                        
                    </div>
                </div>
                <div className=" rounded-[247px] bg-orangered flex flex-row items-start justify-start py-[1rem] px-[2.25rem] text-[1.25rem] w-fit mt-[7rem] lg:mt-[3rem] cursor-pointer hover:bg-darkslategray hover:text-antiquewhite transition ease-in-out">
                    <div className="relative tracking-[0.09em] leading-[2.38rem] font-medium">Learn More</div>
                </div>
            </div>
      </section>
    )
}

export default Hero