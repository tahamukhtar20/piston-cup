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

            <div className="flex w-full flex-col items-center bg-white p-10">
                <h1 className="text-7xl text-primary">Event Plan</h1>
                <h3 className="text-4xl text-secondary">
                    18–20 November 2026
                </h3>
                <br />
                <br />
                <EventTimeline />
            </div>

            {/* Team-wise Sequence */}
            <div className="flex w-full flex-col items-center bg-gray-50 px-6 py-16">
                <h1 className="text-5xl font-bold text-primary">Team-wise Sequence</h1>
                <p className="mt-2 text-xl text-secondary">19 November — Technical Inspection & Dynamic Events</p>
                <p className="mt-4 max-w-3xl text-center text-sm text-gray-500">
                    Teams are inspected two at a time in 40-minute batches. Teams 13 &amp; 14 are inspected after the
                    break. Dynamic events follow the entry order below — each team runs{" "}
                    <span className="font-semibold text-gray-700">Acceleration → Traction → Suspension → Maneuverability</span>.
                    Technical inspection is at the <span className="font-semibold">SNS Futsal Ground</span>; dynamic
                    events are at the <span className="font-semibold">Piston Cup Track</span>.
                </p>
                <div className="mt-10 w-full max-w-4xl overflow-x-auto rounded-2xl shadow-lg">
                    <TeamSequenceTable />
                </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-6 py-16 text-center">
                <h1 className="max-w-3xl text-lg text-primary md:text-3xl">
                    Registrations are now closed. See you at the event!
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

/* ─── Team-wise Sequence Table ───────────────────────────────── */

type TeamEntry = {
    no: number
    name: string
    vehicleNo: number
    inspectionSlot: string
    dynamicOrder: number
}

const teams: TeamEntry[] = [
    { no: 1,  name: "Team Stratos",   vehicleNo: 21, inspectionSlot: "09:00 – 09:40", dynamicOrder: 1  },
    { no: 2,  name: "The Hotrods",    vehicleNo: 34, inspectionSlot: "09:00 – 09:40", dynamicOrder: 2  },
    { no: 3,  name: "Silver Arrow",   vehicleNo: 10, inspectionSlot: "09:40 – 10:20", dynamicOrder: 3  },
    { no: 4,  name: "Team Phantom",   vehicleNo: 66, inspectionSlot: "09:40 – 10:20", dynamicOrder: 4  },
    { no: 5,  name: "Markhoor",       vehicleNo: 52, inspectionSlot: "10:20 – 11:00", dynamicOrder: 5  },
    { no: 6,  name: "Team Maverick",  vehicleNo: 73, inspectionSlot: "10:20 – 11:00", dynamicOrder: 6  },
    { no: 7,  name: "Torque Titans",  vehicleNo: 29, inspectionSlot: "11:00 – 11:40", dynamicOrder: 7  },
    { no: 8,  name: "Team Raftaar",   vehicleNo: 15, inspectionSlot: "11:00 – 11:40", dynamicOrder: 8  },
    { no: 9,  name: "Team Infinity",  vehicleNo: 41, inspectionSlot: "11:40 – 12:20", dynamicOrder: 9  },
    { no: 10, name: "Team SAMP",      vehicleNo: 37, inspectionSlot: "11:40 – 12:20", dynamicOrder: 10 },
    { no: 11, name: "Buraaq",         vehicleNo: 18, inspectionSlot: "12:20 – 13:00", dynamicOrder: 11 },
    { no: 12, name: "Team 95",        vehicleNo: 95, inspectionSlot: "12:20 – 13:00", dynamicOrder: 12 },
    { no: 13, name: "Thunderbolts",   vehicleNo: 88, inspectionSlot: "14:00 – 14:40", dynamicOrder: 13 },
    { no: 14, name: "Track-Hunters",  vehicleNo: 62, inspectionSlot: "14:00 – 14:40", dynamicOrder: 14 },
]

const TeamSequenceTable = () => {
    return (
        <table className="w-full border-collapse text-sm">
            <thead>
                <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left font-semibold">#</th>
                    <th className="px-4 py-3 text-left font-semibold">Team Name</th>
                    <th className="px-4 py-3 text-center font-semibold">Vehicle No.</th>
                    <th className="px-4 py-3 text-center font-semibold">Inspection Slot</th>
                    <th className="px-4 py-3 text-center font-semibold">Dynamic Start Order</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team, idx) => (
                    <tr
                        key={team.no}
                        className={`border-b border-gray-200 transition-colors hover:bg-primary/5 ${
                            idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } ${team.no >= 13 ? "border-t-2 border-t-amber-400" : ""}`}
                    >
                        <td className="px-4 py-3 font-bold text-primary">{team.no}</td>
                        <td className="px-4 py-3 font-semibold text-gray-800">{team.name}</td>
                        <td className="px-4 py-3 text-center">
                            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-bold text-primary">
                                {team.vehicleNo}
                            </span>
                        </td>
                        <td className="px-4 py-3 text-center text-gray-600">{team.inspectionSlot}</td>
                        <td className="px-4 py-3 text-center">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
                                {team.dynamicOrder}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
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

/* ─── Event Timeline ─────────────────────────────────────────── */

type TimelineEvent = {
    time: string
    activity: string
    venue: string
}

type DayBlock = {
    day: string
    date: string
    color: string
    accent: string
    events: TimelineEvent[]
}

const schedule: DayBlock[] = [
    {
        day: "Day 0",
        date: "18 November",
        color: "bg-slate-800",
        accent: "border-slate-500",
        events: [
            { time: "09:00 – 13:00", activity: "Team Registration", venue: "Piston Cup Track" },
            { time: "16:00 onwards", activity: "Team Briefing", venue: "SMME Seminar Hall" },
        ],
    },
    {
        day: "Day 1",
        date: "19 November",
        color: "bg-primary",
        accent: "border-primary",
        events: [
            { time: "09:00", activity: "Technical Inspection begins (two teams at a time, 40-min batches)", venue: "SNS Futsal Ground" },
            { time: "09:00", activity: "Business Presentations begin", venue: "Piston Cup Track" },
            { time: "10:30", activity: "Dynamic Events begin — Acceleration · Traction · Suspension · Maneuverability (teams enter 15 min apart, once cleared by inspection)", venue: "Piston Cup Track" },
            { time: "13:00 – 14:00", activity: "Break — mid-rotation teams hold their place", venue: "Piston Cup Track" },
            { time: "14:00", activity: "Dynamic Events resume", venue: "Piston Cup Track" },
            { time: "14:00 – 14:40", activity: "Technical Inspection — Teams 13 & 14", venue: "SNS Futsal Ground" },
            { time: "16:15", activity: "Last team completes dynamic rotation", venue: "Piston Cup Track" },
            { time: "16:15 – 16:30", activity: "Buffer for re-runs & contingencies — Dynamic Events close at 16:30", venue: "Piston Cup Track" },
            { time: "19:30", activity: "Formal / Theme Dinner — Awards & Souvenirs", venue: "Piston Cup Track" },
        ],
    },
    {
        day: "Day 2",
        date: "20 November",
        color: "bg-emerald-700",
        accent: "border-emerald-500",
        events: [
            { time: "08:00", activity: "Team Reporting", venue: "SNS Parking" },
            { time: "08:30", activity: "Compliance Check & Pre-Gridding", venue: "Piston Cup Track" },
            { time: "09:00", activity: "Endurance Testing begins — all 14 teams", venue: "Piston Cup Track" },
            { time: "13:00", activity: "Endurance Testing ends — Judgement stage begins", venue: "Piston Cup Track" },
            { time: "13:00 – 15:00", activity: "Break — Results Compiling", venue: "Piston Cup Track" },
            { time: "15:00", activity: "Closing Ceremony", venue: "Piston Cup Track" },
        ],
    },
]

const EventTimeline = () => {
    return (
        <div className="w-full max-w-4xl space-y-12 pb-8">
            {schedule.map((day) => (
                <div key={day.day} className="w-full">
                    {/* Day header */}
                    <div className={`mb-6 flex items-baseline gap-4 rounded-xl ${day.color} px-6 py-4 text-white shadow-md`}>
                        <span className="text-3xl font-bold tracking-tight">{day.day}</span>
                        <span className="text-lg opacity-80">{day.date}</span>
                    </div>

                    {/* Timeline rows */}
                    <div className="relative ml-4 border-l-2 border-gray-200 pl-6 space-y-0">
                        {day.events.map((event, idx) => (
                            <div key={idx} className="relative pb-6 last:pb-0">
                                {/* Circle dot on the timeline line */}
                                <span className={`absolute -left-[29px] flex h-4 w-4 items-center justify-center rounded-full border-2 ${day.accent} bg-white`} />

                                <div className={`rounded-lg border-l-4 ${day.accent} bg-gray-50 px-5 py-4 shadow-sm`}>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{event.time}</p>
                                    <p className="mt-1 text-base font-semibold text-gray-800">{event.activity}</p>
                                    <p className="mt-0.5 text-sm text-gray-500">📍 {event.venue}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

