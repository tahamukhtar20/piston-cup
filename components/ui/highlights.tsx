import Image from "next/image"

export function Highlights() {
	return (
		<section className="flex h-full w-full flex-col items-center justify-center bg-gray-100 py-10">
			<div className="container mx-auto">
				<h1 className="text-center text-4xl font-bold text-gray-800">
					Highlights
				</h1>
				<div className="grid gap-4 md:grid-cols-4">
					<div className="col-span-2">
						<Image
							className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105"
							src="/revision1.jpg"
							alt="2"
							width={500}
							height={500}
						/>
					</div>
					<div className="col-span-1">
						<Image
							className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105"
							src="/pic1.jpg"
							alt="1"
							width={500}
							height={500}
						/>
					</div>
					<div className="col-span-1">
						<Image
							className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105"
							src="/pic3.jpg"
							alt="3"
							width={500}
							height={500}
						/>
					</div>
					<div className="col-span-2">
						<Image
							src="/pic14.jpg"
							alt="2"
							className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105"
							width={500}
							height={500}
						/>
					</div>
					<div className="col-span-1">
						<Image
							className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105"
							src="/pic10.jpg"
							alt="3"
							width={500}
							height={500}
						/>
					</div>
					<div className="col-span-1">
						<Image
							className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105"
							src="/pic6.jpg"
							alt="3"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
