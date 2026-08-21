import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "./button"

export const Menu = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 20 }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20
			}}
			className="flex max-w-[95vw] flex-wrap items-center justify-center gap-4 sm:gap-6 rounded-[2rem] border border-white/[0.2] bg-black px-6 py-4 shadow-input transition-all duration-200"
		>
			{children}
		</motion.nav>
	)
}

export const HoveredLink = ({ children, ...rest }: any) => {
	const router = useRouter()
	const currentPage = router.pathname

	if (rest.href === "/sponsorship") {
		return (
			<Link
				href="#"
				className="group relative z-10 capitalize text-neutral-200 whitespace-nowrap transition-all duration-200 hover:scale-105 hover:text-white"
				onClick={(e) => { e.preventDefault(); window.open("/Sponsorship.pdf", "_blank") }}
			>
				Sponsorship
				<h1 className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"}`} />
			</Link>
		)
	}

	if (rest.href === "/ruleBook") {
		return (
			<Link
				href="#"
				className="group relative z-10 capitalize text-neutral-200 transition-all duration-200 hover:scale-105 hover:text-white"
				onClick={(e) => { e.preventDefault(); window.open("/rulebook.pdf", "_blank") }}
			>
				Rulebook
				<h1 className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"}`} />
			</Link>
		)
	}

	if (rest.href === "/magazine") {
		return (
			<div className="group relative z-10 cursor-pointer capitalize text-neutral-200 transition-all duration-200 hover:text-white">
				<span>Magazine</span>
				<h1
					className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"}`}
				/>
				{/* Invisible bridge so hover doesn't break crossing the gap */}
				<div className="absolute left-0 top-full z-50 hidden w-44 pt-2 group-hover:block">
					<div className="rounded-md border border-white/20 bg-black shadow-lg overflow-hidden">
						<button
							onClick={() => alert('The 2026 Magazine will be available soon. Stay tuned!')}
							className="block w-full px-4 py-2 text-left text-neutral-200 hover:bg-white/10"
						>
							2026 Edition
						</button>
						<button
							onClick={() => window.open("/magazines-2024.pdf", "_blank")}
							className="block w-full px-4 py-2 text-left text-neutral-200 hover:bg-white/10"
						>
							2024 Edition
						</button>
						<button
							onClick={() => window.open("/magazines-2023.pdf", "_blank")}
							className="block w-full px-4 py-2 text-left text-neutral-200 hover:bg-white/10"
						>
							2023 Edition
						</button>
					</div>
				</div>
			</div>
		)
	}

	if (rest.href === "/events") {
		return (
			<div className="group relative z-10 cursor-pointer capitalize text-neutral-200 transition-all duration-200 hover:text-white">
				<span>Events</span>
				<h1
					className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${
						currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"
					}`}
				/>
				{/* Invisible bridge so hover doesn't break crossing the gap */}
				<div className="absolute left-0 top-full z-50 hidden w-40 pt-2 group-hover:block">
					<div className="rounded-md border border-white/20 bg-black shadow-lg overflow-hidden">
						<Link href="/events/2026" className="block w-full px-4 py-2 text-neutral-200 hover:bg-white/10">
							2026
						</Link>
						<Link href="/events/2025" className="block w-full px-4 py-2 text-neutral-200 hover:bg-white/10">
							2025
						</Link>
						<Link href="/events/2024" className="block w-full px-4 py-2 text-neutral-200 hover:bg-white/10">
							2024
						</Link>
						<Link href="/events/2023" className="block w-full px-4 py-2 text-neutral-200 hover:bg-white/10">
							2023
						</Link>
					</div>
				</div>
			</div>
		)
	}

	return (
		<Link
			{...rest}
			className="group relative z-10 capitalize whitespace-nowrap text-neutral-200 transition-all duration-200 hover:scale-105 hover:text-white"
		>
			{children}
			<h1
				className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"}`}
			/>
		</Link>
	)
}


export const links = ["home", "about", "track", "register", "ruleBook", "sponsorship", "magazine", "events"]

export const linkRes = (link: string) => {
	if (link === "home") return ""
	return link
}

export const Header = () => {
	return (
		<header className="fixed left-0 top-0 z-[9999] flex w-full items-center justify-center bg-inherit text-base md:text-xl">
			<Menu>
				{links.map(link =>
					link === "register" ? (
						<HoveredLink key={link} href="/register">
							{link}
						</HoveredLink>
					) : (
						<HoveredLink key={link} href={`/${linkRes(link)}`}>
							{link}
						</HoveredLink>
					)
				)}
			</Menu>
		</header>
	)
}
