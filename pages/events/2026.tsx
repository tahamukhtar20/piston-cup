import EventsDates from "@/components/ui/events-dates"
import Image from "next/image"
import React from "react"

export default function Events() {
    return (
        <div className="flex w-full flex-col">
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-bgGray to-black">
                <div className="w-2/3 flex-row text-center">
                    <h1 className="bg text-7xl">Event 2026</h1>
                    <p className="hidden text-sm md:block md:text-lg">
                        Marking the fourth edition of Pakistan's groundbreaking collegiate off-road racing competition, Event 2026 is set to elevate the thrill to an unprecedented level. Teams from universities across the country will return to push boundaries, showcase innovation, and battle for supremacy in one of the most exhilarating motorsports challenges in Pakistan. This edition continues the tradition with three dynamic stages that promise unmatched excitement, fierce competition, and unforgettable racing moments.
                    </p>
                </div>
            </div>

            <div className="flex  w-full flex-col items-center bg-white p-10 ">
                <h1 className="text-7xl text-primary">Event Plan</h1>
                <h3 className="text-4xl text-secondary">
                    12th–13th November 2026
                </h3>
                {/* <EventsDates /> */}
                <br />
                <br />
                <Phase />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 py-16 text-center">
                <h1 className="max-w-3xl text-lg text-primary md:text-3xl">
                    Well then, what are you waiting for? Registrations Are Open till 30 August 2026
                </h1>
                <a
                    href="https://forms.gle/v4gUpn4R25ZcYm2n7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border-2 border-primary px-8 py-3 text-xl transition-transform hover:scale-110 md:text-2xl"
                >
                    Register Now
                </a>
            </div>
            <div className="flex  w-full flex-col items-center bg-white p-10 ">
                <AutoShow2026 />
            </div>
        </div>
    )
}



const AutoShow2026 = () => {
    return (
        <div className="mt-16 w-full md:px-10">
            <p className="w-full text-center text-6xl font-bold text-primary">
                AUTOSHOW 2026
            </p>
            <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/40 bg-gray-50 px-8 py-16 text-center shadow-inner">
                <svg
                    className="mb-4 h-16 w-16 text-primary/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <p className="text-2xl font-bold text-primary">Stay Tuned!</p>
                <p className="mt-2 text-lg text-secondary">
                    Photos from the 2026 Autoshow will be available after the event.
                </p>
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
                        Beginning from the 5th of August 2025, the SMME Piston Cup
                        team will once again reach out to universities nationwide,
                        inviting the most skilled and talented students to register for
                        the fourth edition of this groundbreaking competition. Our goal
                        remains to offer young innovators a platform to showcase their
                        creativity, engineering skills, and passion for motorsports.
                        <br />
                        After the completion of the registration process (deadline: 30 August 2026), the
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
                        The race event will be held on the{" "}
                        <strong>12th–13th of November 2026</strong> when
                        the hard work and innovation of the participating teams
                        will culminate in a breath-taking competition.
                    </p>
                </div>
            </div>
        </div>
    )
}
