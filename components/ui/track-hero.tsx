import { BackgroundBeams } from "./background-beams"

export default function TrackHero() {
	return (
		<section className="track-hero__background relative flex w-full flex-col items-center justify-center gap-14 px-4 pb-10 pt-32 text-black">
			<h1 className="z-10 text-7xl font-bold text-white">Track</h1>
			<BackgroundBeams />
		</section>
	)
}
