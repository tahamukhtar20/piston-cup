import { CardContainer, CardBody, CardItem } from "./3d-card"

const JD: Record<string, { desc: string; batch: string }> = {
	President: {
		batch: "SMME Batch 2023",
		desc: "Serving as President of SMME Piston Cup 2026, providing strategic leadership, guiding the Executive Council, and ensuring the successful execution of the event.",
	},
	"Vice President Resources": {
		batch: "SEECS Batch 2024",
		desc: "Serving as Vice President Resources for SMME Piston Cup 2026, overseeing finance, logistics, inventory, procurement, and resource planning to ensure smooth event operations.",
	},
	"Vice President Operations": {
		batch: "SMME Batch 2024",
		desc: "Serving as Vice President Operations for SMME Piston Cup 2026, managing event execution, operational planning, and cross-team coordination to deliver a seamless experience.",
	},
	"Vice President Media": {
		batch: "IESE Batch 2023",
		desc: "Serving as Vice President Media for SMME Piston Cup 2026, leading branding, content creation, digital marketing, and visual storytelling across all media platforms.",
	},
	"Vice President Outreach": {
		batch: "NBS Batch 2023",
		desc: "Serving as Vice President Outreach for SMME Piston Cup 2026, building strategic partnerships, managing stakeholder relations, and expanding the event's external reach and impact.",
	},
	"Vice President Technical": {
		batch: "SMME Batch 2023",
		desc: "Serving as Vice President Technical for SMME Piston Cup 2026, spearheading technical planning, innovation, and engineering excellence while ensuring successful competition management.",
	},
}

export default function TheTeam() {
	const team = [
		{
			name: "Rehan Iqbal",
			role: "President",
		},
		{
			name: "Mahad Nazir",
			role: "Vice President Resources",
		},
		{
			name: "Masab Ali",
			role: "Vice President Operations",
		},
		{
			name: "Shaheer Kashif",
			role: "Vice President Outreach",
		},
		{
			name: "Kashmala Nadeem",
			role: "Vice President Media",
		},
		{
			name: "Abdullah Qureshi",
			role: "Vice President Technical",
		}
	]

	return (
		<section className="flex h-full w-full flex-col bg-white py-10">
			<h1 className="mb-6 text-center text-5xl font-bold text-black">
				Executive Council 2026
			</h1>
			<p className="mb-10 text-center text-gray-500 text-lg">Meet the team driving the SMME Piston Cup 2026</p>
			<div className="grid gap-6 px-8 sm:grid-cols-2 md:grid-cols-3">
				{team.map((member, index) => (
					<TeamCard key={index} name={member.name} role={member.role} />
				))}
			</div>
		</section>
	)
}

function getInitials(name: string) {
	return name
		.split(" ")
		.map(n => n[0])
		.join("")
		.toUpperCase()
		.slice(0, 2)
}

function TeamCard({ name, role }: { name: string; role: string }) {
	const entry = JD[role] ?? { batch: "", desc: "A core member of the SMME Piston Cup 2026 Executive Council." }
	const { batch, desc } = entry
	return (
		<CardContainer className="w-full">
			<CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
				{/* Placeholder Avatar */}
				<CardItem translateZ="100" className="w-full flex justify-center">
					<div className="h-40 w-40 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center shadow-lg">
						<span className="text-4xl font-bold text-white tracking-widest">
							{getInitials(name)}
						</span>
					</div>
				</CardItem>

				{/* Name */}
				<CardItem
					translateZ="60"
					className="mt-4 w-full text-center text-xl font-bold text-neutral-700 dark:text-white"
				>
					{name}
				</CardItem>

				{/* Role badge */}
				<CardItem
					translateZ="50"
					className="mt-1 w-full text-center"
				>
					<span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
						{role}
					</span>
				</CardItem>

				{/* Batch */}
				{batch && (
					<CardItem translateZ="45" className="mt-2 w-full text-center">
						<span className="text-xs font-medium text-orange-500">{batch}</span>
					</CardItem>
				)}

				{/* Job Description */}
				<CardItem
					as="p"
					translateZ="40"
					className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed"
				>
					{desc}
				</CardItem>

				{/* Photo placeholder label */}
				<CardItem translateZ="30" className="mt-4 w-full text-center">
					<span className="text-xs text-gray-300 italic">Photo coming soon</span>
				</CardItem>
			</CardBody>
		</CardContainer>
	)
}

export const Card = ({
	name,
	role,
	image
}: {
	name: string
	role: string
	image: string
}) => {
	return (
		<div className="flex h-80 w-56 flex-col items-center justify-center rounded-lg bg-white shadow-lg">
			<img src={image} alt={name} className="h-32 w-32 rounded-full" />
			<div className="mt-4 flex flex-col items-center justify-center">
				<h1 className="text-xl font-bold text-neutral-900">{name}</h1>
				<p className="text-sm font-normal text-neutral-500">{role}</p>
			</div>
		</div>
	)
}
