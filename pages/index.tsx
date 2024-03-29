import Layout from "@/components/ui/layout"
import Image from "next/image"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"

export default function Home() {
	return (
		<>
			<Layout>
				<div className="bg-grid-white/[0.02] relative flex h-screen w-full overflow-hidden antialiased md:items-center md:justify-center">
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
						<h1 className="flex flex-row justify-center bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
							<Image
								src="/logo.png"
								width={200}
								height={200}
								alt={"logo"}
							/>
							<span className="flex flex-col items-start">
								<span>SMME</span>
								<span>PISTON CUP</span>
							</span>
						</h1>

						<p className="mx-auto mt-4 max-w-lg text-center text-lg font-normal text-neutral-300">
							SMME Piston Cup is Pakistan&apos;s very first
							collegiate level off-road racing tournament being
							held at National University of Science and
							Technology, Nust. Teams will design, build, and race
							their cars for a chance to lift the SMME piston cup
							and prove their competence in automotive
							engineering.
						</p>
					</motion.div>
				</div>
			</Layout>
		</>
	)
}
