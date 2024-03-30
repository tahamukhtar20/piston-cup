import Image from "next/image"
export function Testimonial() {
	return (
		<section className="flex h-full w-full flex-col gap-8 py-20">
			<h1 className="text-center text-4xl font-bold text-white">
				Our Testimonial
			</h1>
			<div className="container mx-auto flex h-full min-h-80 w-full flex-row items-center rounded-lg border bg-gradient-to-br from-black to-yellow-900">
				<p className="w-2/3 text-start text-3xl text-yellow-600">
					<span className="text-5xl font-bold text-yellow-700">
						"
					</span>
					Faster than fast, quicker than quick, tougher than tough .
					How to break through the impasse? It is not that you
					don&apos;t try to slow down,To breathe and to enjoy each and
					every breath. But the moment you slow down, your mind starts
					playing tricks on your capabilities . you start asking
					questions, soon ending up facing the worst question of all,
					“why?”. Failing to come up with a reasonable answer, you go
					all van Gogh, vanishing in a dizzying maze of memories and
					images, crippled with a sudden burst of anger. Like Vincent
					Van Gogh, Fill your life with passion and direct your anger
					at taking the challenge of completing at SMME Piston Cup and
					live your dreams.
				</p>
				<div className="flex h-full w-1/3 flex-col items-center justify-center">
					<Image
						src="/ikhlaqKhattak.jpg"
						className="rounded-full"
						height="220"
						width="220"
						alt="ikhlaq-khattak"
					/>
					<p className="text-center text-xl text-white">
						Muhammad Ikhlaq Khattak
					</p>
					<p className="text-center text-lg font-normal text-white">
						National University of Science and Technology,
						Islamabad.{" "}
					</p>
				</div>
			</div>
		</section>
	)
}
