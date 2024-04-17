import EventsDates from "@/components/ui/events-dates";
import Image from "next/image"
import { motion,useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Events() {
	return (
		<div className="flex flex-col ">
			<div className="h-screen flex justify-center items-center">
				<div className="flex-row w-2/3 text-center">
					<h1 className="text-7xl bg">Events</h1>

					<p className="">For the first time in the history of Pakistan, School of Mechanical and Manufacturing Engineering (SMME) brings to you the SMME Piston Cup! The novel edition of Pakistan’s first-ever collegiate level off-road racing competition is a dream-come-true for car enthusiasts and motorsports fans alike. The best and brightest from all over Pakistan would come together as college teams to compete in what would be the most intensely adrenaline-inducing University-level racing contest in Pakistan yet! The event itself is divided into three elaborate stages.</p>


				</div>
			</div>

			<div className="bg-white  flex flex-col items-center w-full p-10 ">
				<h1 className="text-7xl text-primary">Event Plan</h1>
				<h3 className="text-4xl text-secondary">17 Nov - 19 Nov 2023</h3>
				<EventsDates />
				<Phase />
			</div>
		</div>
	)
}

const Phase = () => {
	return (
		<div className="flex flex-col items-center w-full gap-2">
			<div className="grid grid-cols-2 gap-16 text-black w-2/3 mb-4 ">
				<div>
					<h1 className="text-5xl text-primary mb-8">Initial Phase</h1>
					<p className="text-xl text-secondary">
						Initiating from 1st of March, SMME Piston Cup&apos;s founders would personally reach out to universities, encouraging the brightest and most resourceful of tech gurus to register themselves for the event. We aim to provide them with a  platform to showcase their talents, hard work and innovation to the world.<br />
						After the completion of the registration process, the participating teams will prepare a business presentation. Moreover, a design presentation will be held along with the track inauguration on 24th of May.
					</p>
				</div>
				<div>
					{/* <Image
						className="h-full w-full "
						src="/pic8.jpg"
						alt="3"
						width={500}
						height={500}
					/> */}
					<AnimatedImage src="/pic8.jpg" alt="3" initial={200} />
				</div>
			</div>
			<div className="grid grid-cols-2 gap-16 text-black w-2/3">
				<div className="col-span-1 ">
					
					<AnimatedImage src="/pic9.jpg" alt="3" initial={-200}/>
				</div>
				<div className="col-span-1">
					<h1 className="text-5xl text-primary mb-8">Final Phase</h1>
					
					<p className="text-xl text-secondary">
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