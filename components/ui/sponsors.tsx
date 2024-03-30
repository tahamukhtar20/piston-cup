import { InfiniteMovingCards } from "./infinite-moving-cards"

export function Sponsors() {
	return (
		<section className="flex h-full w-full flex-col items-center justify-center gap-4 py-10">
			<div className="container mx-auto">
				<h1 className="text-center text-4xl font-bold text-white">
					Sponsors
				</h1>
			</div>
			<InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="slow"
			/>
		</section>
	)
}

const testimonials = [
	"/sponsors/1.png",
	"/sponsors/2.png",
	"/sponsors/3.png",
	"/sponsors/4.png",
	"/sponsors/5.png"
]
