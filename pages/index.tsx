import { Hero } from "@/components/ui/hero"
import { BentoGrid } from "@/components/ui/bento-grid"
import { Testimonial } from "@/components/ui/testimonial"
import { Highlights } from "@/components/ui/highlights"
import { Sponsors } from "@/components/ui/sponsors"

export default function Home() {
	return (
		<>
			<Hero />
			<BentoGrid />
			<Testimonial />
			<Highlights />
			<Sponsors />
		</>
	)
}
