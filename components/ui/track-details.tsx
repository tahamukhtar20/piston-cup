import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "./3d-card"

export default function TrackDetails() {
	return (
		<section className="flex h-full w-full flex-col items-center justify-start gap-6 px-4 text-white md:py-10">
			<h1 className="text-center text-3xl font-bold md:text-5xl">
				The Ring of Fire — 2026 Edition
			</h1>
			<p className="max-w-3xl text-center text-xl font-normal md:text-2xl">
				Welcome to&nbsp;
				<span className="text-primary">"THE RING OF FIRE"</span>,
				the arena where champions are forged and the glorious&nbsp;
				<span className="text-primary">"PISTON CUP"</span> is won.
				The track is located right in front of&nbsp;
				<span className="text-primary">
					"NUST SADDLE CLUB"&nbsp;
				</span>{" "}
				at NUST, H-12 Sector, Islamabad. The location has been carefully
				chosen keeping in mind the safety of our participants as well as
				providing a level playing field for all.
			</p>

			{/* Track details grid */}
			<div className="mt-4 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
				{[
					{ label: "Track Length", value: "1.1 km" },
					{ label: "Edition", value: "2026" },
					{ label: "Venue", value: "Piston Track NUST" },
					{ label: "Final Phase", value: "12–13 Nov 2026" }
				].map(({ label, value }) => (
					<div
						key={label}
						className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/5 p-4 text-center backdrop-blur-sm"
					>
						<span className="text-2xl font-bold text-primary">{value}</span>
						<span className="mt-1 text-sm text-neutral-400">{label}</span>
					</div>
				))}
			</div>

			<Image
				src="/spc-track-2026.png"
				alt="SPC 2026 Track Map"
				width={1000}
				height={500}
				className="ease-[cubic-bezier(0.25,0.1,0.25,1)] transition-all duration-300 hover:scale-105"
			/>

			<p className="max-w-3xl text-center text-base text-neutral-400 md:text-lg">
				The full updated track layout for the 2026 edition is shown above.
				Stay tuned for additional track details and specifications as the event approaches.
			</p>
		</section>
	)
}
