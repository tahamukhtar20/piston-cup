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
			className="flex w-fit items-center justify-end space-x-4 rounded-full border border-white/[0.2] bg-black px-8 py-4 shadow-input transition-all duration-200"
		>
			{children}
		</motion.nav>
	)
}

export const HoveredLink = ({ children, ...rest }: any) => {
	const router = useRouter()
	const currentPage = router.pathname
	if (rest.href === "/ruleBook") {
		return (
			<div className="group relative z-10 capitalize text-neutral-200 transition-all duration-200 hover:scale-105 hover:text-white cursor-pointer">
				<span>Rulebook</span>
				<h1
					className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"}`}
				/>
				<div className="absolute left-0 top-full pt-2 hidden group-hover:block">
					<div className="w-44 rounded-md bg-black border border-white/20 shadow-lg overflow-hidden">
						<button
							onClick={() => window.open("/rulebook.pdf", "_blank")}
							className="block w-full px-4 py-2 text-left text-neutral-200 hover:bg-white/10"
						>
							Rulebook 2025
						</button>
						<button
							disabled
							className="block w-full px-4 py-2 text-left text-neutral-500 cursor-not-allowed flex items-center justify-between"
						>
							<span>Rulebook 2026</span>
							<span className="ml-2 text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">Soon</span>
						</button>
					</div>
				</div>
			</div>
		)
	}
	if (rest.href === "/magazine") {
		return (
			<div className="group relative z-10 capitalize text-neutral-200 transition-all duration-200 hover:scale-105 hover:text-white cursor-pointer">
				<span>Magazine</span>
				<h1
					className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"}`}
				/>
				<div className="absolute left-0 top-full pt-2 hidden group-hover:block">
					<div className="w-44 rounded-md bg-black border border-white/20 shadow-lg overflow-hidden">
						<button
							disabled
							className="block w-full px-4 py-2 text-left text-neutral-500 cursor-not-allowed flex items-center justify-between"
						>
							<span>2026 Edition</span>
							<span className="ml-2 text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">Soon</span>
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
		<div className="group relative z-10 capitalize text-neutral-200 transition-all duration-200 hover:scale-105 hover:text-white cursor-pointer">
			<span>Events</span>

			<h1
				className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${
					currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"
				}`}
			/>

			{/* Dropdown */}
			<div className="absolute left-0 top-full pt-2 hidden group-hover:block">
				<div className="w-40 rounded-md bg-black border border-white/20 shadow-lg overflow-hidden">
					<Link
						href="/events/2026"
						className="block w-full px-4 py-2 text-neutral-200 hover:bg-white/10"
					>
						2026
					</Link>

					<Link
						href="/events/2025"
						className="block w-full px-4 py-2 text-neutral-200 hover:bg-white/10"
					>
						2025
					</Link>

					<Link
						href="/events/2024"
						className="block w-full px-4 py-2 text-neutral-200 hover:bg-white/10"
					>
						2024
					</Link>

					<Link
						href="/events/2023"
						className="block w-full px-4 py-2 text-neutral-200 hover:bg-white/10"
					>
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
				className="group relative z-10 capitalize text-neutral-200 transition-all duration-200 hover:scale-105 hover:text-white"
			>
				{children}
				<h1
					className={`cubic-bezier(0.4, 0, 0.2, 1) absolute
			h-1 rounded-full transition-all duration-300 group-hover:w-full
			${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"}
			`}
				/> 
			</Link>
		)
	}

	

export const links = ["home", "about", "events", "track", "register","ruleBook","magazine"]

export const linkRes = (link: string) => {
	if (link === "home") return ""
	return link
}

export const Header = () => {
	return (
		<header className="fixed left-0 top-0 z-[9999] flex w-full items-center justify-center bg-inherit text-xl">
			<Menu>
				{links.map(link =>
				link === "register" ? (
					<HoveredLink
						key={link}
						href="#"
						onClick={(e: React.MouseEvent) => {
							e.preventDefault()
							alert("Registration link coming soon! Check back after 30 August 2026.")
						}}
					>
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
