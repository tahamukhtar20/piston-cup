export default function AboutHero() {
	return (
		<section
			className="flex min-h-screen w-full flex-col gap-14 bg-gray-900 px-4 py-40 text-white"
			style={{
				backgroundImage: "url('/about-page.svg')"
			}}
		>
			<h1 className="text-center text-7xl font-bold">
				About&nbsp;
				<span className="text-primary">SMME Piston Cup</span>
			</h1>
			<p className="mx-auto max-w-5xl rounded-xl bg-primary/50 p-2 text-center text-xl font-normal md:text-3xl">
				The School of Mechanical and Manufacturing Engineering at NUST
				proudly presents Pakistan&apos;s first off-road racing
				tournament, the SMME Piston Cup. Teams from across the nation
				participate to construct and compete with their vehicles, facing
				off for the prestigious trophy and an irresistible cash prize.
				At the forefront of NUST, SMME showcases its excellence in
				producing top-tier graduates. The school provides a cutting-edge
				blend of modern industrial and academic environment to the
				students and the faculty, offering diverse programs of studies
				and sciences. In a groundbreaking initiative customized to
				ignite the passion of car enthusiasts nationwide, SMME proudly
				presents the captivating SMME Piston Cup. Prepare to embark on
				an electrifying journey at the National University of Science
				and Technology, where participants will showcase their technical
				skills, agility, and professionalism in this thrilling off-road
				racing contest.
			</p>
		</section>
	)
}
