import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "./3d-card"

export default function TrackDetails() {
	return (
		<section className="flex h-full w-full flex-col items-center justify-start gap-10 px-4 text-white md:py-10">
			<h1 className="text-center text-3xl font-bold md:text-5xl">
				The Ring of Fire — 2026
			</h1>
			<p className="max-w-3xl text-center text-xl font-normal md:text-2xl">
				It&apos;s time to talk about&nbsp;
				<span className="text-primary">&ldquo;THE RING OF FIRE&rdquo;&nbsp;</span>,
				the place where you will prove your worth and lift the glorious&nbsp;
				<span className="text-primary">&ldquo;PISTON CUP&rdquo;</span>. The track is
				located right in front of&nbsp;
				<span className="text-primary">
					&ldquo;NUST SADDLE CLUB&rdquo;&nbsp;
				</span>
				at NUST, H-12 Sector, Islamabad. The location has been carefully
				chosen keeping in mind the safety of our participants as well as
				providing a level playing field for all teams.
			</p>

			{/* Track details grid */}
			<div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
				{[
					{ label: "Location", value: "NUST H-12, ISB" },
					{ label: "Surface", value: "Off-Road / Dirt" },
					{ label: "Race Days", value: "12–13 Nov 2026" },
					{ label: "Edition", value: "4th Annual" },
				].map(item => (
					<div
						key={item.label}
						className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
					>
						<span className="text-xs uppercase tracking-widest text-neutral-400">{item.label}</span>
						<span className="mt-1 text-lg font-bold text-primary">{item.value}</span>
					</div>
				))}
			</div>

			{/* Track Map */}
			<div className="w-full max-w-5xl">
				<h2 className="mb-6 text-center text-2xl font-bold text-primary md:text-3xl">Track Map — 2026</h2>
				<div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
					<img
						src="/spc-track.png"
						alt="SMME Piston Cup 2026 Track Map"
						className="w-full h-auto object-contain"
					/>
				</div>
			</div>

			{/* Track Description */}
			<div className="max-w-3xl w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
				<h2 className="mb-4 text-2xl font-bold text-primary">About the Track</h2>
				<p className="text-base text-neutral-300 leading-relaxed">
					The SMME Piston Cup track is an off-road circuit purpose-built for buggy racing, 
					situated on the sprawling grounds adjacent to the NUST Saddle Club in Islamabad&apos;s 
					H-12 sector. The circuit challenges teams with a combination of tight technical 
					sections, elevation changes, and open straights — designed to test both the 
					engineering quality of the vehicle and the skill of the driver. The off-road 
					surface demands robust suspension setups and precise throttle control, making 
					it a true test of every team&apos;s build quality. Safety barriers, marshalling 
					stations, and a dedicated spectator zone ensure a safe but thrilling experience 
					for everyone involved.
				</p>
			</div>
		</section>
	)
}
