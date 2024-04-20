import { ThreeDCard } from "./3d-card"

export default function AmbassadorsMain() {
	const ambassadors = [
		{
			name: "Taha",
			university: "NUST",
			image: "https://picsum.photos/1200"
		},
		{
			name: "Taha",
			university: "NUST",
			image: "https://picsum.photos/1200"
		},
		{
			name: "Taha",
			university: "NUST",
			image: "https://picsum.photos/1200"
		},
		{
			name: "Taha",
			university: "NUST",
			image: "https://picsum.photos/1200"
		}
	]
	return (
		<section className="grid w-full gap-4 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{ambassadors.map((item, index) => (
				<ThreeDCard {...item} key={index} />
			))}
		</section>
	)
}
