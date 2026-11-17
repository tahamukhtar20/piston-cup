import { InfiniteMovingCards } from "./infinite-moving-banner"

const scheduleItems = [
	"🔴  HAPPENING NOW  ·  DAY 0  ·  18 NOVEMBER 2026",
	"📅  09:00 – 13:00  ·  Team Registration  ·  Piston Cup Track",
	"📋  16:00 onwards  ·  Team Briefing  ·  SMME Seminar Hall",
	"🔧  TOMORROW DAY 1  ·  09:00  ·  Technical Inspection  ·  SNS Futsal Ground",
	"🎤  TOMORROW DAY 1  ·  09:00  ·  Business Presentations  ·  Piston Cup Track",
	"🏎️  TOMORROW DAY 1  ·  10:30  ·  Dynamic Events Begin  ·  Piston Cup Track",
	"⚡  Dynamic Events: Acceleration · Traction · Suspension · Maneuverability",
	"🍽️  TOMORROW DAY 1  ·  19:30  ·  Formal Dinner & Awards  ·  Piston Cup Track",
	"🏁  DAY 2  ·  20 NOV  ·  09:00  ·  Endurance Testing  ·  Piston Cup Track",
	"🏆  DAY 2  ·  20 NOV  ·  15:00  ·  Closing Ceremony  ·  Piston Cup Track",
	"🚗  14 Teams Competing  ·  Visit Events 2026 for full schedule",
]

export function EventTicker() {
	return (
		<div className="event-ticker fixed bottom-3 left-1/2 z-50 w-[96%] max-w-5xl -translate-x-1/2">
			{/* Outer glow ring */}
			<div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />

			{/* Main pill */}
			<div className="relative flex items-center overflow-hidden rounded-full border border-white/10 bg-black/85 shadow-[0_4px_32px_rgba(220,60,0,0.35)] backdrop-blur-xl">

				{/* LIVE NOW badge */}
				<div className="z-10 shrink-0 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-orange-500 mx-1.5 my-1 px-4 py-1.5 shadow-md">
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
					</span>
					<span className="text-[10px] font-black tracking-widest text-white uppercase whitespace-nowrap">
						Live Now
					</span>
				</div>

				{/* Thin divider */}
				<div className="h-5 w-px shrink-0 bg-white/20" />

				{/* Scrolling ticker — right to left */}
				<InfiniteMovingCards
					items={scheduleItems}
					direction="left"
					speed="slow"
					pauseOnHover={true}
					className="flex-1"
				/>
			</div>
		</div>
	)
}
