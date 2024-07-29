import { InfiniteMovingCards } from "./infinite-moving-banner"

const items = Array.from({ length: 12 }, (_, i) => i).map(
	(_, i) => `Piston Cup`
)

export function Banner() {
	return (
		<div className="absolute left-0 top-0 z-50 w-full bg-yellow-600 text-white">
			<InfiniteMovingCards
				items={items}
				direction="right"
				speed="normal"
			/>
		</div>
	)
}
