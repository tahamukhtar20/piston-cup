import { Hero } from "@/components/ui/hero"
import { EventTicker } from "@/components/ui/event-ticker"
import { BentoGrid } from "@/components/ui/bento-grid"
import { Testimonial } from "@/components/ui/testimonial"
import { Highlights } from "@/components/ui/highlights"
import { Sponsors } from "@/components/ui/sponsors"
import Link from "next/link"

export default function Home() {
	return (
		<>
			<Hero />
			<LiveEventBanner />
			<EventTicker />
			<BentoGrid />
			<Testimonial />
			<Highlights />
			<Sponsors />
		</>
	)
}

/* ─── Live Event Banner ─────────────────────────────────────── */
function LiveEventBanner() {
	const days = [
		{
			label: "Day 0",
			date: "18 Nov",
			color: "from-slate-700 to-slate-900",
			accent: "border-slate-400",
			dot: "bg-slate-400",
			items: [
				{ time: "09:00 – 13:00", text: "Team Registration", venue: "Piston Cup Track" },
				{ time: "16:00 onwards", text: "Team Briefing", venue: "SMME Seminar Hall" },
			],
		},
		{
			label: "Day 1",
			date: "19 Nov",
			color: "from-orange-700 to-red-900",
			accent: "border-orange-400",
			dot: "bg-orange-400",
			items: [
				{ time: "09:00", text: "Technical Inspection & Business Presentations begin", venue: "SNS Futsal Ground / Piston Cup Track" },
				{ time: "10:30", text: "Dynamic Events begin", venue: "Piston Cup Track" },
				{ time: "19:30", text: "Formal Dinner & Awards", venue: "Piston Cup Track" },
			],
		},
		{
			label: "Day 2",
			date: "20 Nov",
			color: "from-emerald-700 to-teal-900",
			accent: "border-emerald-400",
			dot: "bg-emerald-400",
			items: [
				{ time: "09:00", text: "Endurance Testing begins", venue: "Piston Cup Track" },
				{ time: "15:00", text: "Closing Ceremony", venue: "Piston Cup Track" },
			],
		},
	]

	return (
		<section className="relative w-full bg-black px-4 py-16 pb-24 overflow-hidden">
			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,60,0,0.12),transparent_70%)]" />

			{/* Header */}
			<div className="relative mx-auto mb-10 max-w-5xl text-center">
				<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2">
					<span className="inline-block h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
					<span className="text-sm font-bold uppercase tracking-widest text-primary">Event Underway</span>
				</div>
				<h2 className="text-4xl font-black text-white md:text-6xl">
					SPC 2026 is{" "}
					<span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
						Happening Now
					</span>
				</h2>
				<p className="mt-3 text-lg text-neutral-400">
					18 – 20 November 2026 · NUST, Islamabad
				</p>
			</div>

			{/* Day cards */}
			<div className="relative mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
				{days.map((day, i) => (
					<div
						key={day.label}
						className={`relative rounded-2xl border ${day.accent} bg-gradient-to-br ${day.color} p-6 shadow-xl`}
						style={{ animationDelay: `${i * 0.15}s` }}
					>
						{/* Day badge */}
						<div className="mb-4 flex items-center gap-3">
							<span className={`inline-block h-3 w-3 rounded-full ${day.dot} ${i === 0 ? "animate-ping" : ""}`} />
							<span className="text-xl font-black text-white">{day.label}</span>
							<span className="ml-auto rounded-full bg-white/10 px-3 py-0.5 text-sm font-semibold text-white/80">
								{day.date}
							</span>
						</div>
						{/* Events */}
						<ul className="space-y-3">
							{day.items.map((item, j) => (
								<li key={j} className="border-l-2 border-white/20 pl-3">
									<p className="text-xs font-bold uppercase tracking-wider text-white/50">{item.time}</p>
									<p className="text-sm font-semibold text-white">{item.text}</p>
									<p className="text-xs text-white/50">📍 {item.venue}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			{/* CTA */}
			<div className="relative mx-auto mt-10 flex justify-center">
				<Link
					href="/events/2026"
					className="rounded-full border-2 border-primary bg-primary/10 px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-white"
				>
					View Full Schedule & Team Order →
				</Link>
			</div>
		</section>
	)
}

