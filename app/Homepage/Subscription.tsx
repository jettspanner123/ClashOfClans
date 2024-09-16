import React from "react";
import {SECONDARY_COLOR} from "@/app/constants";

const Subscription = (): React.JSX.Element => {
    return (
        <section style={{background: SECONDARY_COLOR}} className={`w-screen h-screen flex flex-col justify-center items-center`}>
            <h1 className={`text-[15rem] text-white`}>10% off</h1>
            <h1 className={`text-white text-[5rem]`}>home order and newzletter subscription</h1>
            <p className={`font-light text-white`}>Hello world my name is uddeshya singh and tushar and utsav is gae copples.</p>
        </section>
    )
}

export default Subscription;