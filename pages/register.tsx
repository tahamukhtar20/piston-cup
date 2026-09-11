import { useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"

const BASE_FEE = 27000
const EXTRA_PER_MEMBER = 3000
const BASE_LIMIT = 15
const MAX_MEMBERS = 20
const MIN_MEMBERS = 4

function calculateFee(count: number) {
	if (count <= BASE_LIMIT) return BASE_FEE
	return BASE_FEE + (count - BASE_LIMIT) * EXTRA_PER_MEMBER
}

const keyDates = [
	{ date: "15th September 2026",     label: "Registration Deadline",         desc: "Last day to submit your team registration",         urgent: true  },
	{ date: "30th September 2026",  label: "CAD Model Submission",           desc: "Submit your final CAD model for technical review",   urgent: false },
	{ date: "15th October 2026",    label: "Design Report Submission",       desc: "Technical design report submission deadline",        urgent: false },
	{ date: "12th November 2026",   label: "Business Proposal Presentation", desc: "Present your business proposal to the judging panel", urgent: false },
	{ date: "12–13th November 2026", label: "Final Event — Race Day",        desc: "Off-road racing finals at Piston Track, NUST",       urgent: false },
]

export default function RegisterPage() {
	const [members, setMembers] = useState(MIN_MEMBERS)
	const totalFee = calculateFee(members)

	return (
		<>
			<Head>
				<title>Register – SMME Piston Cup 2026</title>
				<meta name="description" content="Register your team for SMME Piston Cup 2026. Pakistan's first university off-road racing tournament." />
			</Head>

			<main className="min-h-screen w-full bg-black text-white">

				{/* ── HERO ─────────────────────────────────────────────── */}
				<section className="relative flex w-full overflow-hidden py-24 antialiased md:h-screen md:items-center md:justify-center md:py-0">

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 text-center md:pt-0"
					>
						<h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
							Ready to Compete?
						</h1>

						<p className="mx-auto mt-6 max-w-xl text-center text-lg font-normal text-neutral-300">
							Join Pakistan&apos;s first ever university-affiliated off-road racing tournament.
							Design, build and race your own buggy at NUST on <strong className="text-white">12–13 November 2026</strong>.
						</p>

						{/* Deadline badge — placed naturally here, not as an intrusive top banner */}
						<div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/30 px-5 py-2">
							<span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
							<span className="text-sm font-semibold text-red-400">Registration Deadline: 15th September 2026</span>
						</div>

						{/* Stats */}
						<div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
							{[
								{ value: "4+", label: "Editions" },
								{ value: "PKR 600,000", label: "Prize Pool" },
								{ value: "1.1 km", label: "Track Length" },
								{ value: "NUST H-12", label: "SMME Piston Cup Track" },
							].map((s) => (
								<div key={s.label} className="flex min-w-[140px] flex-col justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-6 text-center backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-white/10">
									<p className="text-3xl font-bold text-yellow-400">{s.value}</p>
									<p className="mt-2 text-sm font-medium uppercase tracking-wider text-neutral-400">{s.label}</p>
								</div>
							))}
						</div>

						{/* Buttons */}
						<div className="mt-10 flex flex-wrap justify-center gap-4">
							<a
								href="https://forms.gle/v4gUpn4R25ZcYm2n7"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-yellow-500 px-8 py-3 text-base font-bold text-black transition-all duration-200 hover:scale-105 hover:bg-yellow-400"
							>
								Register Your Team →
							</a>
							<button
								onClick={() => window.open("/rulebook.pdf", "_blank")}
								className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-yellow-500/40 hover:bg-white/10"
							>
								View Rulebook
							</button>
						</div>
					</motion.div>
				</section>

				{/* ── KEY DATES ────────────────────────────────────────── */}
				<section className="w-full py-16">
					<div className="container mx-auto px-4">
						<h2 className="mb-2 text-center text-4xl font-bold text-white">Key Dates</h2>
						<p className="mb-12 text-center text-base font-normal text-neutral-400">Mark your calendar — these are the deadlines that matter.</p>

						<div className="mx-auto max-w-3xl">
							{keyDates.map((item, i) => (
								<div key={i} className="mb-4 flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-white/10">
									<div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${item.urgent ? "bg-red-500 text-white" : "bg-yellow-400 text-black"}`}>
										{i + 1}
									</div>
									<div className="flex-1">
										<p className="text-sm font-semibold text-neutral-400">{item.date}</p>
										<p className="mt-0.5 text-base font-bold text-white">{item.label}</p>
										<p className="mt-1 text-sm text-neutral-400">{item.desc}</p>
									</div>
									{item.urgent && (
										<span className="shrink-0 rounded-full border border-red-500/30 bg-red-950/40 px-3 py-1 text-xs font-bold text-red-400">
											Deadline
										</span>
									)}
									{i === keyDates.length - 1 && !item.urgent && (
										<span className="shrink-0 rounded-full border border-yellow-500/30 bg-yellow-950/40 px-3 py-1 text-xs font-bold text-yellow-400">
											Race Day
										</span>
									)}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── ABOUT + PRIZE ─────────────────────────────────────── */}
				<section className="w-full py-16">
					<div className="container mx-auto px-4">
						<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

							{/* History */}
							<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-white/10">
								<h3 className="text-2xl font-bold text-white">A Legacy of Engineering Excellence</h3>
								<div className="mt-3 h-1 w-14 rounded-full bg-yellow-500" />
								<p className="mt-5 text-base font-normal leading-relaxed text-neutral-300">
									The SMME Piston Cup is Pakistan&apos;s first university-affiliated off-road racing tournament, hosted at NUST by the School of Mechanical &amp; Manufacturing Engineering.
								</p>
								<p className="mt-4 text-base font-normal leading-relaxed text-neutral-400">
									Since 2022, student teams design, build, and race their own buggies on a 1.1 km dedicated track — showcasing engineering excellence and motorsport passion across Pakistan.
								</p>
							</div>

							{/* Prize Pool */}
							<div className="flex flex-col items-center justify-center rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-950/40 to-black p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-yellow-500/60 hover:from-yellow-950/60">
								<p className="text-sm font-semibold text-yellow-500">Total Prize Pool</p>
								<p className="mt-3 text-6xl font-bold text-white">PKR</p>
								<p className="text-6xl font-bold text-yellow-400">600,000</p>
								<p className="mt-4 text-sm font-normal text-neutral-400">
									Distributed across winning teams at the Final Event · 12–13 November 2026
								</p>
								<a
									href="https://forms.gle/v4gUpn4R25ZcYm2n7"
									target="_blank"
									rel="noopener noreferrer"
									className="mt-8 block w-full rounded-full bg-yellow-500 py-3 text-base font-bold text-black transition-all duration-200 hover:bg-yellow-400"
								>
									Register Now
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* ── REGISTRATION FEE ──────────────────────────────────── */}
				<section className="w-full py-16">
					<div className="container mx-auto px-4">
						<h2 className="mb-12 text-center text-4xl font-bold text-white">Registration Fee</h2>

						<div className="mx-auto max-w-4xl">
							<div className="grid gap-4 md:grid-cols-2">
								<div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-white/10">
									<p className="text-sm font-semibold text-yellow-500">Base Team · 4–15 Members</p>
									<p className="mt-4 text-4xl font-bold text-white">PKR <span className="text-yellow-400">27,000</span></p>
									<p className="mt-3 text-sm text-neutral-400">Flat rate for any team from 4 to 15 members. Minimum 4 members required.</p>
								</div>

								<div className="rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-yellow-500/60 hover:bg-yellow-950/30">
									<p className="text-sm font-semibold text-yellow-400">Extended Team · 16–20 Members</p>
									<p className="mt-4 text-4xl font-bold text-white">PKR <span className="text-yellow-400">27,000</span></p>
									<p className="mt-1 text-base font-bold text-yellow-400">+ PKR 3,000 per extra member</p>
									<p className="mt-3 text-sm text-neutral-400">Per member beyond the first 15. Maximum 20 members per team.</p>
								</div>
							</div>

							{/* Calculator */}
							<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
								<h4 className="mb-6 text-center text-2xl font-bold text-white">Fee Calculator</h4>
								<div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
									<div className="flex-1">
										<div className="mb-4 flex justify-between text-lg">
											<span className="font-medium text-neutral-400">Team members</span>
											<span className="font-bold text-white">{members} members</span>
										</div>
										<input
											type="range"
											min={MIN_MEMBERS}
											max={MAX_MEMBERS}
											value={members}
											onChange={(e) => setMembers(Number(e.target.value))}
											className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-yellow-500"
										/>
										<div className="mt-3 flex justify-between text-sm font-medium text-neutral-500">
											<span>4 min</span>
											<span>20 max</span>
										</div>
									</div>
									<div className="flex shrink-0 flex-col items-center rounded-2xl border border-yellow-500/30 bg-yellow-950/20 px-10 py-5 text-center">
										<span className="text-xs text-neutral-400">Total Fee</span>
										<span className="mt-1 text-4xl font-bold text-yellow-400">PKR {totalFee.toLocaleString()}</span>
										{members > BASE_LIMIT && (
											<span className="mt-1 text-xs text-neutral-500">Base + {members - BASE_LIMIT} × PKR 3,000</span>
										)}
									</div>
								</div>
							</div>

							<p className="mt-4 text-center text-sm text-neutral-500">
								* Minimum 4 members · Maximum 20 members per team
							</p>
						</div>
					</div>
				</section>

				{/* ── FINAL CTA ─────────────────────────────────────────── */}
				<section className="relative w-full overflow-hidden py-24 text-center">
					<div className="relative z-10 container mx-auto px-4">
						<h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
							Secure Your Spot Today
						</h2>
						<p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300">
							Limited slots available. Register before <strong className="text-white">15th September 2026</strong> to compete at Pakistan&apos;s biggest off-road racing event.
						</p>
						<div className="mt-10 flex flex-wrap justify-center gap-4">
							<a
								href="https://forms.gle/v4gUpn4R25ZcYm2n7"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-yellow-500 px-10 py-4 text-base font-bold text-black transition-all duration-200 hover:scale-105 hover:bg-yellow-400"
							>
								Register Your Team →
							</a>
							<button
								onClick={() => window.open("/rulebook.pdf", "_blank")}
								className="rounded-full border border-white/20 bg-white/5 px-10 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-yellow-500/40 hover:bg-white/10"
							>
								View Rulebook
							</button>
						</div>
					</div>
				</section>

			</main>
		</>
	)
}
