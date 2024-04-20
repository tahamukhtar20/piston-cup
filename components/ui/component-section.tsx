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
		<section className="h-full w-full p-4" id="contact">
			<form
				onSubmit={handleSubmit}
				className="xs:px-10 xs:pb-10 flex w-full flex-col items-center justify-center gap-8 rounded-2xl border border-gray-200 bg-black px-4 py-4 pb-4 shadow dark:bg-slate-800 lg:px-20 lg:pb-20"
			>
				<h1 className="xs:text-3xl my-8 w-full p-0.5 text-start text-2xl font-semibold sm:text-5xl">
					{title}
				</h1>
				<div className="flex w-full flex-row">
					<input
						type="text"
						name="name"
						placeholder={nameTitle}
						required
						value={formData.name}
						onChange={handleChange}
						className="w-full rounded-none border border-x-0 border-t-0 border-secondary bg-transparent focus:outline-0"
					/>
				</div>
				<div className="flex w-full flex-row">
					<input
						type="text"
						placeholder={emailTitle}
						name="email"
						required
						value={formData.email}
						onChange={handleChange}
						className="w-full rounded-none border border-x-0 border-t-0 border-secondary bg-transparent focus:outline-0"
					/>
				</div>
				<div className="flex w-full flex-row">
					<input
						type="text"
						name="company"
						placeholder={CompanyTitle}
						required
						value={formData.company}
						onChange={handleChange}
						className="w-full rounded-none border border-x-0 border-t-0 border-secondary bg-transparent focus:outline-0"
					/>
				</div>
				<div className="flex w-full flex-row">
					<input
						type="text"
						name="employees"
						required
						placeholder={NumberOfEmployeesTitle}
						value={formData.employees}
						onChange={handleChange}
						className="w-full rounded-none border border-x-0 border-t-0 border-secondary bg-transparent focus:outline-0"
					/>
				</div>
				<div className="flex w-full flex-row">
					<input
						type="text"
						placeholder={phoneTitle}
						required
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="w-full rounded-none border border-x-0 border-t-0 border-secondary bg-transparent focus:outline-0"
					/>
				</div>
				<Button className="mt-4 self-start px-8" type={"submit"}>
					{buttonLabel}
				</Button>
			</form>
		</section>
	)
}
