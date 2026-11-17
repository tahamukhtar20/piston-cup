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
	"👉  14 Teams Competing  ·  Visit Events 2026 for full schedule",
]

export function EventTicker() {
	return (
		<div className="event-ticker fixed bottom-0 left-0 z-50 w-full border-t border-primary/60 bg-black/90 py-1 backdrop-blur-md shadow-[0_-4px_30px_rgba(255,80,0,0.2)]">
			<div className="flex items-center">
				{/* Flashing LIVE NOW label */}
				<div className="z-10 shrink-0 flex items-center gap-1.5 bg-primary px-3 py-1 shadow-lg">
					<span className="inline-block h-2 w-2 rounded-full bg-white animate-ping" />
					<span className="text-[10px] font-black tracking-widest text-white uppercase whitespace-nowrap">
						Live&nbsp;Now
					</span>
				</div>

				{/* Scrolling ticker — right direction */}
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
