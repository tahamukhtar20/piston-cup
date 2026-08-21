import { useState } from "react"

export function RegistrationFee() {
	const BASE_FEE = 27000
	const EXTRA_PER_MEMBER = 3000
	const BASE_LIMIT = 15
	const MAX_MEMBERS = 20
	const MIN_MEMBERS = 3

	const [members, setMembers] = useState(MIN_MEMBERS)

	const calculateFee = (count: number) => {
		if (count <= BASE_LIMIT) return BASE_FEE
		return BASE_FEE + (count - BASE_LIMIT) * EXTRA_PER_MEMBER
	}

	const totalFee = calculateFee(members)

	return (
		<section className="relative w-full overflow-hidden bg-black py-20">
			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
				<div className="h-[500px] w-[700px] rounded-full bg-yellow-600/10 blur-[120px]" />
			</div>

			<div className="relative z-10 container mx-auto px-4">
				{/* Heading */}
				<div className="mb-14 text-center">
					<p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
						Participate
					</p>
					<h1 className="text-5xl font-extrabold uppercase tracking-tight text-white md:text-6xl">
						Registration Fee
					</h1>
					<div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400" />
				</div>

				{/* Cards */}
				<div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
					{/* Base fee card */}
					<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/10">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20">
							<svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<h2 className="mb-1 text-lg font-semibold uppercase tracking-wide text-yellow-400">
							Base Team
						</h2>
						<p className="mb-4 text-sm text-neutral-400">3 – 15 members</p>
						<div className="flex items-end gap-1">
							<span className="text-4xl font-extrabold text-white">PKR 27,000</span>
						</div>
						<p className="mt-3 text-sm text-neutral-400">
							Flat rate for any team size up to 15 members. Minimum 3 members required.
						</p>
					</div>

					{/* Extended fee card */}
					<div className="group relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-black p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/60">
						<div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-yellow-500/10 blur-2xl" />
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/30">
							<svg className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</div>
						<h2 className="mb-1 text-lg font-semibold uppercase tracking-wide text-yellow-400">
							Extended Team
						</h2>
						<p className="mb-4 text-sm text-neutral-400">16 – 20 members</p>
						<div className="flex items-end gap-1">
							<span className="text-4xl font-extrabold text-white">PKR 27,000</span>
						</div>
						<p className="mt-1 text-base font-semibold text-yellow-400">
							+ PKR 3,000 / extra member
						</p>
						<p className="mt-3 text-sm text-neutral-400">
							Charged per member beyond the first 15. Maximum team size is 20 members.
						</p>
					</div>
				</div>

				{/* Fee Calculator */}
				<div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
					<h3 className="mb-6 text-center text-xl font-bold text-white">Fee Calculator</h3>
					<div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
						<div className="w-full md:w-2/3">
							<div className="mb-2 flex justify-between text-sm text-neutral-400">
								<span>Team Members</span>
								<span className="font-semibold text-yellow-400">{members} members</span>
							</div>
							<input
								type="range"
								min={MIN_MEMBERS}
								max={MAX_MEMBERS}
								value={members}
								onChange={(e) => setMembers(Number(e.target.value))}
								className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-yellow-500"
							/>
							<div className="mt-1 flex justify-between text-xs text-neutral-500">
								<span>{MIN_MEMBERS} (min)</span>
								<span>{MAX_MEMBERS} (max)</span>
							</div>
						</div>
						<div className="flex flex-col items-center rounded-xl border border-yellow-500/30 bg-yellow-900/20 px-8 py-4">
							<span className="text-xs uppercase tracking-widest text-neutral-400">Total Fee</span>
							<span className="mt-1 text-3xl font-extrabold text-yellow-400">
								PKR {totalFee.toLocaleString()}
							</span>
							{members > BASE_LIMIT && (
								<span className="mt-1 text-xs text-neutral-500">
									Base + {members - BASE_LIMIT} × PKR 3,000
								</span>
							)}
						</div>
					</div>
				</div>

				{/* Note */}
				<p className="mt-8 text-center text-sm text-neutral-500">
					* Maximum 20 members allowed per team &nbsp;·&nbsp; Minimum 3 members required
				</p>
			</div>
		</section>
	)
}
