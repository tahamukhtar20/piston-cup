import React, { useState } from "react"
import { Button } from "./button"

export function ContactSection({
	title,
	nameTitle,
	emailTitle,
	phoneTitle,
	buttonLabel,
	CompanyTitle,
	NumberOfEmployeesTitle
}: {
	title: string
	nameTitle: string
	emailTitle: string
	CompanyTitle: string
	NumberOfEmployeesTitle: string
	phoneTitle: string
	buttonLabel: string
}) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		employees: "",
		phone: ""
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setFormData({
			name: "",
			email: "",
			company: "",
			employees: "",
			phone: ""
		})
	}

	return (
		<section className="h-84 w-full p-4" id="contact">
			<div className="w-full p-6 px-14 bg-slate-800 rounded-xl">
				<h1 className="text-4xl ">Contact Us:</h1>
				<div className="flex flex-col justify-around h-80 " >
					<div >
						<h2 className="text-2xl text-gray-400">For event details:</h2>
						<a href="mailto:smmepistoncup@gmail.com" className="text-xl text-gray-400" >smmepistoncup@gmail.com</a>
					</div>
					<div className="border-2 border-gray-500 rounded-xl"></div>
					<div>
						<h2 className="text-2xl text-gray-400">For Technical Queries:</h2>
						<a href="mailto:technical.spc@smme.edu.pk" className="text-xl text-gray-400">technical.spc@smme.edu.pk</a>
					</div>
					<div className="border-2 border-gray-500 rounded-xl"></div>

					<div className="flex  justify-between px-14">
						<div >
						<h1 className="text-xl text-gray-400">Talha Masood</h1>
						<p className="text-xl text-gray-400">+92 310 8112070</p>

						</div>
						<div>
						<h1 className="text-xl text-gray-400">Huzaifa Mustafa</h1>
						<p className="text-xl text-gray-400">+92 303 8986556</p>	
						</div>						
						
					</div>

				</div>

			</div>
		</section>
	)
}
