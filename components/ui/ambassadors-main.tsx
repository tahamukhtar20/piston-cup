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
		<section className="grid grid-cols-3 gap-4">
			{ambassadors.map(item => (
				<ThreeDCard {...item} />
			))}
		</section>
	)
}
