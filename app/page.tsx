"use client";
import React from "react";
import { BACKGROUND_COLOR } from "./constants";
import HeroSection from "@/app/Homepage/HeroSection";
import Menu from "@/app/Homepage/Menu";
import Subscription from "@/app/Homepage/Subscription";
import NightOut from "@/app/Homepage/Nightout";
import Ingredients from "@/app/Homepage/Ingredients";
import Pasta from "@/app/Homepage/Pastsa";
import {AiFillTrademarkCircle} from "react-icons/ai";
import TraditionalFood from "@/app/Homepage/TraditionalFoot";
import AboutUsPage from "@/app/Homepage/AboutUs";
import Contacts from "@/app/Homepage/Contacts";

export default function Home(): React.JSX.Element {

    React.useEffect(() => {
        (
            async () => {
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [[]])


    return (
        <React.Fragment>
            <main
                style={{
                   backgroundColor: BACKGROUND_COLOR
                }}
                className={`w-screen`}>

                <HeroSection />
                <Menu />
                <Subscription />
                <NightOut />
                <Ingredients />
                <Pasta />
                <TraditionalFood />
                <AboutUsPage />
                <Contacts />
            </main>
        </React.Fragment>
    )
}