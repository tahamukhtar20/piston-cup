export default function TheTeam() {
	const team = [
		{
			name: "John Doe",
			role: "CEO",
			image: "https://source.unsplash.com/random/?Cryptocurrency&1"
		},
		{
			name: "Jane Doe",
			role: "CTO",
			image: "https://source.unsplash.com/random/?Cryptocurrency&1"
		},
		{
			name: "John Smith",
			role: "COO",
			image: "https://source.unsplash.com/random/?Cryptocurrency&1"
		}
	]

	return (
		<section className="flex h-full w-full flex-col bg-white py-10">
			<h1 className="text-center text-4xl font-bold text-black">
				The Team
			</h1>
			<div className="flex flex-row items-center justify-center gap-10 py-4">
				{team.map(member => (
					<Card
						key={member.name}
						name={member.name}
						role={member.role}
						image={member.image}
					/>
				))}
			</div>
		</section>
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
