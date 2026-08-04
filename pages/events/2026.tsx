import Image from "next/image"
import React from "react"

export default function Events() {
    return (
        <div className="flex w-full flex-col">
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-bgGray to-black">
                <div className="w-2/3 flex-row text-center">
                    <h1 className="bg text-7xl">Event 2026</h1>
                    <p className="hidden text-sm md:block md:text-lg">
                        Marking the fourth edition of Pakistan&apos;s groundbreaking collegiate off-road racing competition, Event 2026 is set to elevate the thrill to an unprecedented level. Teams from universities across the country will return to push boundaries, showcase innovation, and battle for supremacy in one of the most exhilarating motorsports challenges in Pakistan. This edition continues the tradition with three dynamic stages that promise unmatched excitement, fierce competition, and unforgettable racing moments.
                    </p>
                </div>
            </div>

            <div className="flex  w-full flex-col items-center bg-white p-10 ">
                <h1 className="text-7xl text-primary">Event Plan</h1>
                <h3 className="text-4xl text-secondary">
                    12th–13th November 2026
                </h3>
                <br />
                <br />
                <Phase />
            </div>

            {/* Autoshow Section */}
            <div className="flex w-full flex-col items-center bg-white p-10">
                <AutoShow />
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-4 pt-20 text-center pb-20">
                <h1 className="text-lg text-primary md:text-3xl">
                    Well then, what are you waiting for? Registrations Are Open till 30 August 2026
                </h1>
                <div className="mt-10 flex md:mt-0">
                    <button
                        className="text-rg rounded-md border-2 border-primary p-2 transition-transform hover:scale-110 md:p-4 md:text-2xl opacity-50 cursor-not-allowed"
                        title="Registration link coming soon"
                    >
                        Register Now — Link Coming Soon
                    </button>
                </div>
            </div>
        </div>
    )
}

const AutoShow = () => {
    return (
        <div className="mt-10 w-full md:px-20">
            <p className="w-full text-center text-6xl font-bold text-primary">
                EXCLUSIVE AUTO SHOW
            </p>
            <div className="my-10 flex w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-primary/40 bg-orange-50 p-12 text-center max-w-2xl w-full">
                    <div className="text-5xl">🏎️</div>
                    <h2 className="text-2xl font-bold text-primary">Stay Tuned!</h2>
                    <p className="text-lg text-gray-600">
                        Photos from the 2026 Autoshow will be available after the event.
                    </p>
                    <p className="text-sm text-gray-400">
                        Check back after <span className="font-semibold text-primary">12th–13th November 2026</span>
                    </p>
                </div>
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
                        Beginning from the 5th of August 2026, the SMME Piston Cup
                        team will once again reach out to universities nationwide,
                        inviting the most skilled and talented students to register for
                        the fourth edition of this groundbreaking competition. Our goal
                        remains to offer young innovators a platform to showcase their
                        creativity, engineering skills, and passion for motorsports.
                        <br />
                        After the completion of the registration process, the
                        participating teams will prepare a business
                        presentation. Moreover, a design presentation will be
                        held along with the track inauguration.
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
                        The race event will be held on <strong>12th–13th November 2026</strong> when
                        the hard work and innovation of the participating teams
                        will culminate in a breath-taking competition.
                    </p>
                </div>
            </div>
        </div>
    )
}
