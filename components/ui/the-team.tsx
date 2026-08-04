type TeamMember = {
	name: string
	role: string
	initials: string
	gradient: string
	description: string
}

export default function TheTeam() {
	const team: TeamMember[] = [
		{
			name: "Rehan Iqbal",
			role: "President",
			initials: "RI",
			gradient: "from-orange-600 to-red-700",
			description:
				"From SMME Batch 2023, he is serving as President of SMME Piston Cup 2026, providing strategic leadership, guiding the Executive Council, and ensuring the successful execution of the event."
		},
		{
			name: "Mahad Nazir",
			role: "Vice President Resources",
			initials: "MN",
			gradient: "from-blue-600 to-indigo-700",
			description:
				"From SEECS Batch 2024, he is serving as Vice President Resources for SMME Piston Cup 2026, overseeing finance, logistics, inventory, procurement, and resource planning to ensure smooth event operations."
		},
		{
			name: "Masab Ali",
			role: "Vice President Operations",
			initials: "MA",
			gradient: "from-emerald-600 to-teal-700",
			description:
				"From SMME Batch 2024, he is serving as Vice President Operations for SMME Piston Cup 2026, managing event execution, operational planning, and cross-team coordination to deliver a seamless experience."
		},
		{
			name: "Kashmala Nadeem",
			role: "Vice President Media",
			initials: "KN",
			gradient: "from-purple-600 to-pink-600",
			description:
				"From IESE Batch 2023, she is serving as Vice President Media for SMME Piston Cup 2026, leading branding, content creation, digital marketing, and visual storytelling across all media platforms."
		},
		{
			name: "Shaheer Kashif",
			role: "Vice President Outreach",
			initials: "SK",
			gradient: "from-yellow-500 to-orange-600",
			description:
				"From NBS Batch 2023, he is serving as Vice President Outreach for SMME Piston Cup 2026, building strategic partnerships, managing stakeholder relations, and expanding the event's external reach and impact."
		},
		{
			name: "Abdullah Qureshi",
			role: "Vice President Technical",
			initials: "AQ",
			gradient: "from-cyan-600 to-blue-700",
			description:
				"From SMME Batch 2023, he is serving as Vice President Technical for SMME Piston Cup 2026, spearheading technical planning, innovation, and engineering excellence while ensuring successful competition management."
		}
	]

	return (
		<section className="flex h-full w-full flex-col bg-white py-10">
			<h1 className="mb-8 text-center text-5xl font-bold text-black">
				Executive Council 2026
			</h1>
			<div className="grid gap-6 px-8 sm:grid-cols-2 md:grid-cols-3">
				{team.map((member, index) => (
					<TeamCard key={index} {...member} />
				))}
			</div>
		</section>
	)
}

function TeamCard({ name, role, initials, gradient, description }: TeamMember) {
	return (
		<div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
			{/* Placeholder avatar */}
			<div className={`relative flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
				<span className="text-7xl font-bold text-white/90 select-none">{initials}</span>
				{/* Photo coming soon badge */}
				<span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2 py-1 text-xs text-white/70 backdrop-blur-sm">
					Photo coming soon
				</span>
				{/* Dark gradient at bottom */}
				<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
				{/* Name & role always visible */}
				<div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
					<h2 className="text-xl font-bold text-white">{name}</h2>
					<p className="text-sm font-medium text-yellow-300">{role}</p>
				</div>
			</div>

			{/* Hover overlay with description */}
			<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/88 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${gradient}`}>
					<span className="text-2xl font-bold text-white">{initials}</span>
				</div>
				<h2 className="mb-1 text-center text-xl font-bold text-white">{name}</h2>
				<p className="mb-3 text-center text-sm font-semibold text-yellow-400">{role}</p>
				<p className="text-center text-sm leading-relaxed text-neutral-200">{description}</p>
			</div>
		</div>
	)
}
