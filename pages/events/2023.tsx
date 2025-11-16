import EventsDates from "@/components/ui/events-dates"
import Image from "next/image"
import React from "react"

export default function Events() {
    return (
        <div className="flex w-full flex-col">
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-bgGray to-black">
                <div className="w-2/3 flex-row text-center">
                    <h1 className="bg text-7xl">Event 2023</h1>

                    <p className="text-sm md:text-lg ">
                        For the first time in the history of Pakistan, School of
                        Mechanical and Manufacturing Engineering (SMME) brought
                        the SMME Piston Cup!
                    </p>
                    <p className="hidden text-sm md:block md:text-lg">
                        The novel edition of Pakistan's first-ever collegiate
                        level off-road racing competition is a dream-come-true
                        for car enthusiasts and motorsports fans alike. The best
                        and brightest from all over Pakistan would come together
                        as college teams to compete in what would be the most
                        intensely adrenaline-inducing University-level racing
                        contest in Pakistan yet! The event itself is divided
                        into three elaborate stages.
                    </p>
                </div>
            </div>

            <div className="flex  w-full flex-col items-center bg-white p-10 ">
                {/* <h1 className="text-7xl text-primary">Event Plan</h1>
                <h3 className="text-4xl text-secondary">
                    13 Feb - 15 Feb 2026
                </h3>
                <EventsDates />
                <Phase /> */}
                <AutoShow />
                <BrandLaunch />
            </div>
            {/* <div className="flex w-full flex-col items-center justify-center gap-4 pt-20 text-center">
                <h1 className="text-lg text-primary md:text-3xl">
                    Well then, what are you waiting for?
                </h1>
                <div className="mt-10 flex md:mt-0">
                    <button className="text-rg rounded-md border-2 border-primary p-2 transition-transform hover:scale-110 md:p-4 md:text-2xl">
                        Register Now
                    </button>
                </div>
            </div> */}
        </div>
    )
}
const AutoShow = () => {
    return (
        <div className="mt-10  w-full md:px-20">
            <p className="w-full text-center text-6xl font-bold text-primary">
                EXCLUSIVE AUTO SHOW
            </p>
            <p className="text-base font-normal text-white"></p>
            <div className="item-center my-10  flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto">
                <img src="/newHighlight.jpeg" className="h-72 object-cover" />
                <img src="/2023AS1.jpeg" className="h-72 object-cover" />
                <img src="/2023AS2.jpeg" className="h-72 object-cover" />
                <img src="/2023AS3.jpeg" className="h-72 object-cover" />
                <img src="/2023AS4.jpeg" className="h-72 object-cover" />
                <img src="/2023AS6.jpeg" className="h-72 object-cover" />
            </div>
        </div>
    )
}
const BrandLaunch = () => {
    return (
        <div className="mt-10  w-full md:px-20">
            <p className="w-full text-center text-6xl font-bold text-primary">
                BRAND LAUNCH
            </p>
            <p className="text-base font-normal text-white"></p>
            <div className="item-center my-10  flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto">
                <img src="/2023BL1.jpeg" className="h-72 object-cover" />
                <img src="/2023BL2.jpeg" className="h-72 object-cover" />
                <img src="/social.jpeg" className="h-72 object-cover" />
            </div>
             <div>{/* <div > className="item-center my-10  flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto"  */}
                {/* <img src="/IMG_1593.PNG" className="h-72 object-cover" /> */}
                {/* <img src="/IMG_1594.PNG" className="h-72 object-cover" />
                <img src="/IMG_1595.PNG" className="h-72 object-cover" />
                <img src="/IMG_1599.PNG" className="h-72 object-cover" />
                <img src="/IMG_1602.PNG" className="h-72 object-cover" />
                <img src="/IMG_1605.PNG" className="h-72 object-cover" /> */}
            </div>
        </div>
    )
}

const Phase = () => {
    return (
        <div className="container mx-auto flex w-full flex-col items-center gap-8">
            <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
                <div className="lg:min-w-[500px]">
                    <Image width={500} height={300} src="/pic8.jpg" alt="3" />
                </div>
                <div className="w-full">
                    <h1 className="text-lg text-primary md:mb-8 md:text-5xl">
                        Initial Phase
                    </h1>
                    <p className="whitespace-normal text-sm  text-secondary md:max-h-full  md:text-xl">
                        Initiating from 1st of March, SMME Piston Cup&apos;s
                        founders would personally reach out to universities,
                        encouraging the brightest and most resourceful of tech
                        gurus to register themselves for the event. We aim to
                        provide them with a platform to showcase their talents,
                        hard work and innovation to the world.
                        <br />
                        After the completion of the registration process, the
                        participating teams will prepare a business
                        presentation. Moreover, a design presentation will be
                        held along with the track inauguration on 24th of May.
                    </p>
                </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4 lg:flex-row-reverse">
                <div className="lg:min-w-[500px]">
                    <Image width={500} height={300} src="/pic9.jpg" alt="3" />
                </div>
                <div className="w-full">
                    <h1 className="text-sm text-primary md:mb-8 md:text-5xl">
                        Final Phase
                    </h1>

                    <p className="whitespace-normal text-sm text-secondary md:max-h-full  md:text-xl">
                        This final stage is when we fasten seatbelts and drive
                        ourselves into the most-awaited point of the entire
                        event: the race itself! After the teams submit all the
                        required documents such as the cost report and final
                        design.
                        <br />
                        <br />
                        The race event will be held in the November of 2023 when
                        the hard work and innovation of the participating teams
                        will culminate in a breath-taking competition.
                    </p>
                </div>
            </div>
        </div>
    )
}
