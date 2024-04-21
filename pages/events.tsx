import EventsDates from "@/components/ui/events-dates";
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { LampDemo } from "@/components/ui/lamp";
export default function Events() {
	return (

		<div className="flex flex-col ">
			<div className="h-screen flex justify-center items-center bg-gradient-to-br from-black via-bgGray to-black">
				<div className="flex-row w-2/3 text-center">
					<h1 className="text-7xl bg">Events</h1>

					<p className="text-sm md:text-lg ">For the first time in the history of Pakistan, School of Mechanical and Manufacturing Engineering (SMME) brings to you the SMME Piston Cup! 
					</p>
					<p className="text-sm md:text-lg hidden md:block">
					The novel edition of Pakistan’s first-ever collegiate level off-road racing competition is a dream-come-true for car enthusiasts and motorsports fans alike. The best and brightest from all over Pakistan would come together as college teams to compete in what would be the most intensely adrenaline-inducing University-level racing contest in Pakistan yet! The event itself is divided into three elaborate stages.</p>


				</div>
			</div>

			<div className="bg-white  flex flex-col items-center w-full p-10 ">
				<h1 className="text-7xl text-primary">Event Plan</h1>
				<h3 className="text-4xl text-secondary">17 Nov - 19 Nov 2023</h3>
				<EventsDates />
				<Phase />

			</div>
			<div className=" h-60 w-full flex flex-col md:flex-row justify-center items-center text-center ">
				<h1 className="text-lg md:text-3xl text-primary" >Well then, what are you waiting<br /> for?</h1>
				<div className="flex mt-10 md:mt-0">
				<button className=" md:ml-20 text-rg md:text-2xl border-2 border-primary p-2 md:p-4 rounded-md transition-transform hover:scale-110">Register Now</button>
				<button className="ml-2 md:ml-10 text-rg md:text-2xl border-2 border-primary p-2 md:p-4 rounded-md transition-transform hover:scale-110">Resources</button>
				</div>
			</div>
		</div>

	)
}

const Phase = () => {
	return (
		<div className="flex flex-col items-center w-full gap-1">
			<div className="grid grid-rows-2  md:grid-cols-2 md:grid-rows-1 gap-2 md:gap-16 text-black w-full md:w-2/3 mb-4 ">
			<div className="md:hidden flex items-center justify-center ">
					<AnimatedImage src="/pic8.jpg" alt="3" initial={200} />
				</div>
				<div>

					<h1 className="text-lg md:text-5xl text-primary md:mb-8">Initial Phase</h1>
					<p className="text-sm whitespace-normal  md:text-xl text-secondary  md:max-h-full">
						Initiating from 1st of March, SMME Piston Cup&apos;s founders would personally reach out to universities, encouraging the brightest and most resourceful of tech gurus to register themselves for the event.
				

						We aim to provide them with a  platform to showcase their talents, hard work and innovation to the world.<br />
						After the completion of the registration process, the participating teams will prepare a business presentation. Moreover, a design presentation will be held along with the track inauguration on 24th of May.
					</p>
				</div>
				<div className="hidden md:flex items-center justify-center ">
					<AnimatedImage src="/pic8.jpg" alt="3" initial={200} />
				</div>
			</div>
			<div className="grid grid-rows-2  md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-16 text-black w-full md:w-2/3 ">
				<div className="flex items-center justify-center ">

					<AnimatedImage src="/pic9.jpg" alt="3" initial={-200} />
				</div>
				<div className="col-span-1">
					<h1 className="text-sm md:text-5xl text-primary md:mb-8">Final Phase</h1>

					<p className="text-sm whitespace-normal md:text-xl text-secondary  md:max-h-full">
						This final stage is when we fasten seatbelts and drive ourselves into the most-awaited point of the entire event: the race itself! After the teams submit all the required documents such as the cost report and final design.
						<br />
						<br />
					
						The race event will be held in the November of 2023 when the hard work and innovation of the participating teams will culminate in a breath-taking competition.


					</p>
				</div>

			</div>
		</div>
	)
}
const AnimatedImage = ({ src, alt, initial }: { src: string, alt: string, initial: number }) => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		console.log("inuseEffect")
		if (inView) {
			controls.start({ x: 0 });
		}
	}, [controls, inView]);

	return (
		<motion.img
			ref={ref}
			src={src}
			alt={alt}
			initial={{ x: initial }}
			animate={controls}
			transition={{ duration: 0.5 }}
		/>
	);
};