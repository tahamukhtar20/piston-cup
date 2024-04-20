import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "./3d-card"

export default function TrackDetails() {
	return (
		<section className="flex h-full w-full flex-col items-center justify-start gap-6 px-4 text-white md:py-10">
			<h1 className="text-center text-3xl font-bold md:text-5xl">
				Our Track is Under Construction
			</h1>
			<p className="max-w-3xl text-center text-xl font-normal md:text-2xl">
				Its time to talk about the &nbsp;
				<span className="text-primary">"THE RING OF FIRE"&nbsp;</span>,
				The place where you will prove your worth and lift the glorious
				&nbsp;
				<span className="text-primary">"PISTON CUP"</span>. The track is
				located right infront of &nbsp;
				<span className="text-primary">
					"NUST SADDLE CLUB"&nbsp;
				</span>{" "}
				at NUST, H-12 Sector , ISLAMABAD.The location has been carefully
				chosen keeping in mind the safety of our particpants as well as
				providing a level playing field for all.
			</p>
			<Image
				src="/spc-track.png"
				alt="track"
				width={1000}
				height={500}
				className="ease-[cubic-bezier(0.25,0.1,0.25,1)] transition-all duration-300 hover:scale-105"
			/>
		</section>
	)
}
