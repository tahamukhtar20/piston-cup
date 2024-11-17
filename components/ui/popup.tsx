import { X } from "lucide-react"
import { useEffect, useState } from "react"

export default function Popup() {
	const [popup, setPopup] = useState(false)

	useEffect(() => {
		setPopup(true)
	}, [])

	return (
		<div
			className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${popup ? "block" : "hidden"}`}
		>
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-primary p-8 py-12">
				<h1 className="text-center text-2xl font-bold">
					The Event will be held on 22nd, 23rd and 24th of November
					2024!
				</h1>
				<button
					onClick={() => setPopup(false)}
					className="absolute right-0 top-0 p-4 text-white"
				>
					<X size={24} />
				</button>
			</div>
		</div>
	)
}
