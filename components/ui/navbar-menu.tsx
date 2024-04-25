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

export const links = ["home", "about", "events", "track", "register"]

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
						<HoveredLink key={link} href="">
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
