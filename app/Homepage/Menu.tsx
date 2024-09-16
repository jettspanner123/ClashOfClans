import React from "react";
import {ACCENT_COLOR, TEXT_ACCENT} from "@/app/constants";

const Menu = (): React.JSX.Element => {
    return (
        <section className={`h-screen w-screen bg-white`}>
            <h1
                style={{
                    color: ACCENT_COLOR
                }}
                className={`text-[4rem] text-center pt-10`}>
                MEnu
                <span
                    style={{
                        color: TEXT_ACCENT
                    }}
                    className={'ml-5'}>
                    speacility
                </span>
            </h1>


            <div className={`flex bg-blue-300 w-full h-full mt-10`}>
                <div className={`flex-1 h-full bg-green-300`}>
                    <h1 style={{color: ACCENT_COLOR}} className={`text-[3rem] text-center`}>Italian Traditional Dishes</h1>
                    <MenuItem name={"Lorem ipsum dolor sit amet........10%"} desc={"lorem ipsum dolor sit amet"} />
                </div>

                <div className={`flex-1 h-full bg-red-300`}>
                    <h1 style={{color: ACCENT_COLOR}}>Traditional Dishes</h1>
                </div>
            </div>
        </section>
    )
}

const MenuItem = ({name, desc}: {name: string, desc: string}): React.JSX.Element => {
    return (
        <div className={`text-center`}>
            <h1 className={``}>{name}</h1>
            <h1>{name}</h1>
        </div>
    )
}

export default Menu;