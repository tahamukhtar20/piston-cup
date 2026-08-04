import { Inter, Stardos_Stencil, Bebas_Neue } from "next/font/google"
import { Header } from "./navbar-menu"
import { Footer } from "./footer"
import { Button } from "./button"
import { ArrowUp, Star } from "lucide-react"
import { Banner } from "./banner"
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={`${bebasNeue.className} tracking-normal`}>
			<Banner />
			<Header />
			<main
				className={`flex min-h-[calc(100vh-250px)] flex-col items-center justify-between`}
			>
				{children}
			</main>
			<Button
				className="fixed bottom-10 right-10 z-50 aspect-square h-14 rounded-full"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				<ArrowUp size={24} />
			</Button>
			<Footer />
		</div>
	)
}
