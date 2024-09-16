import React from "react";
import {ACCENT_COLOR, TEXT_ACCENT} from "@/app/constants";
import {motion, useScroll, useTransform} from "framer-motion";
import Img from "./Img.png";
import Image from "next/image";


const HeroSection = (): React.JSX.Element => {


    const navbarOptions: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Menu", link: "/menu"},
        {name: "Blogs", link: "/blogs"},
        {name: "Shops", link: "/shops"},
        {name: "Contact", link: "/contacts"},

    ];
    const heroSectionRef: React.RefObject<HTMLElement> = React.useRef<HTMLElement>(null);
    const {scrollYProgress} = useScroll({
        target: heroSectionRef,
        offset: ["end end", "end 0.4"]

    })
    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "150deg"]);
    return (
        <section
            ref={heroSectionRef}
            className={`h-screen w-screen`}>
            <header
                style={{background: ACCENT_COLOR}}
                className={`w-full flex justify-center items-center text-[4rem] uppercase font-bold p-10`}>
                BarFili Masti
            </header>

            <motion.nav
                style={{
                    background: ACCENT_COLOR,
                    top: "9.5rem",
                }}
                className={`left-1/2 -translate-x-1/2  rounded-[1rem] absolute`}>
                <ul className={`font-bold text-white gap-[0.5rem] overflow-hidden flex items-end text-[1.5rem]`}>
                    {navbarOptions.map((item: { name: string, link: string }, index: number) => {
                        return <motion.li
                            key={index}
                            className={`w-full hover:bg-[#FCAF32] p-[1rem] pt-[1.5rem] hover:text-white flex justify-center items-center`}
                            onClick={() => window.location.assign(item.link)}>
                            {item.name}
                        </motion.li>
                    })}
                </ul>
            </motion.nav>


            <div className={`w-full h-[70%] relative flex justify-center items-start pt-[2rem] mt-[4rem]`}>
                <motion.div
                    style={{
                        rotate,
                        border: `2rem solid ${ACCENT_COLOR}`
                    }}
                    className={`h-[25rem] relative flex rounded-full overflow-hidden justify-center items-center w-[25rem] bg-red-300`}>

                    <Image
                        style={{
                            scale: 1.5
                        }}
                        className={`absolute left-1/2 -translate-x-[45%]`}
                        src={Img} alt={""}/>

                </motion.div>



                <motion.h1
                    style={{color: TEXT_ACCENT}}
                    className={`absolute leading-[1.5rem] text-right right-[1.5rem] text-[1.5rem]`}>
                    Uddesya singh hello world
                    <br/>
                    Utsav is gay, no weaner
                    <br/>
                    Tushar is seculary, in terms of girls.
                </motion.h1>


                <motion.h1
                    data-scroll
                    data-scroll-speed={"0.15"}
                    style={{
                        color: TEXT_ACCENT
                    }}
                    className={`absolute left-[1.5rem] bottom-[5rem] text-[5rem]`}>Italian
                </motion.h1>
                <motion.h1
                    data-scroll
                    data-scroll-speed={"0.09"}
                    style={{
                        color: ACCENT_COLOR
                    }}
                    className={`absolute left-[1.5rem] bottom-[1rem] text-[5rem]`}>Speciality
                </motion.h1>
            </div>


        </section>
    )
}

export default HeroSection;