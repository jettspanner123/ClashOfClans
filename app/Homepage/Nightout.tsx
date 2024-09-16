import React from "react";
import {ACCENT_COLOR, BACKGROUND_COLOR, TEXT_ACCENT} from "../constants";
import Image from "next/image";
import Img from "@/app/Homepage/Img.png";

const NightOut = (): React.JSX.Element => {
    return (
        <section
            style={{background: BACKGROUND_COLOR}}
            className={`h-screen w-screen flex p-10 px-20`}>

            <div className={`flex-1 h-full flex justify-center items-center`}>

                <div
                    className={`h-[25rem] relative flex rounded-full overflow-hidden justify-center items-center w-[25rem] bg-red-300`}>

                    <Image
                        style={{
                            scale: 1.5
                        }}
                        className={`absolute left-1/2 -translate-x-[45%]`}
                        src={Img} alt={""}/>

                </div>
            </div>

            <div className={`flex-1 h-full flex flex-col justify-center items-end text-right`}>
                <h1
                    style={{
                        color: TEXT_ACCENT
                    }}
                    className={`text-[10rem]`}>Pizza</h1>
                <h1
                    style={{
                        color: ACCENT_COLOR
                    }}
                    className={`text-[10rem] leading-[1px]`}>Nightout</h1>

                <h1
                    style={{
                        color: TEXT_ACCENT
                    }}

                    className={`leading-[15rem] text-[3rem]`}
                >
                    best pizza in town
                </h1>
            </div>
        </section>
    )
}

export default NightOut;