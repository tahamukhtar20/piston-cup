export function Highlights() {
	const photos = [
		{ src: "/revision1.jpg", alt: "Highlight 1", cols: "col-span-2" },
		{ src: "/revision2.jpg", alt: "Highlight 2", cols: "col-span-1" },
		{ src: "/revision4.jpg", alt: "Highlight 3", cols: "col-span-1" },
		{ src: "/revision3.jpg", alt: "Highlight 4", cols: "col-span-1" },
		{ src: "/revision5.jpg", alt: "Highlight 5", cols: "col-span-1" },
		{ src: "/pic14.jpg",     alt: "Highlight 6", cols: "col-span-2" },
	]

	return (
		<section className="flex w-full flex-col items-center justify-center bg-gray-100 py-10">
			<div className="container mx-auto px-4">
				<h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
					Highlights
				</h1>
				<div className="grid grid-cols-2 gap-3 md:grid-cols-4">
					{photos.map(({ src, alt, cols }) => (
						<div
							key={src}
							className={`${cols} h-56 overflow-hidden rounded-lg md:h-80`}
						>
							<img
								src={src}
								alt={alt}
								className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
