import Image from "next/image"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero() {
	return (
		<section className="bg-grid-white/[0.02] relative flex w-full overflow-hidden py-24 antialiased md:h-screen md:items-center md:justify-center md:py-0">
			<Spotlight
				className="-top-40 left-0 md:-top-20 md:left-60"
				fill="white"
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
				className="relative z-10  mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0"
			>
				<h1 className="flex flex-col items-center justify-center bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:flex-row md:text-7xl">
					<Image
						src="/logo.png"
						width={200}
						height={200}
						alt={"logo"}
					/>
					<span className="flex items-start md:flex-col">
						<span>SMME&nbsp;</span>
						<span>PISTON CUP</span>
					</span>
				</h1>

				<p className="mx-auto mt-4 max-w-lg text-center text-lg font-normal text-neutral-300">
					The SMME Piston Cup marks Pakistan&apos;s first ever
					university-affiliated off-road racing tournament! Held at
					NUST, this milestone of an event encourages students to
					showcase prowess in automotive engineering and driving by
					crafting, constructing and competing their vehicles.
				</p>
			</motion.div>
		</section>
	)
}
