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
	console.log(rest.href)
	if (rest.href === "/ruleBook") {
		console.log("=>",)
		return(
			<Link href="" className="group relative z-10 capitalize text-neutral-200 transition-all duration-200 hover:scale-105 hover:text-white" onClick={()=>{window.open("/rulebook.pdf",'_blank')}}  >
      			Rulebook
				<h1 className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"}`}/> 
   			 </Link>
		)
	}
		if (rest.href === "/magazine") {
		return (
			<div className="group relative z-10 capitalize text-neutral-200 transition-all duration-200 hover:scale-105 hover:text-white cursor-pointer">
				<span>Magazine</span>
				<h1
					className={`cubic-bezier(0.4, 0, 0.2, 1) absolute h-1 rounded-full transition-all duration-300 group-hover:w-full ${currentPage === rest.href ? "w-full bg-primary" : "w-0 bg-white"
						}`}
				/>
				<div className="absolute left-0 top-full mt-2 hidden w-40 rounded-md bg-black border border-white/20 shadow-lg group-hover:block overflow-hidden ">
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
							href="https://docs.google.com/forms/d/e/1FAIpQLSe1IiWYTljtV9eNcXCHv_Bsn6pEXa9M0eGhM8N07tRLuXTA0g/viewform"
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
