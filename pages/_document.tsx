import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en" className="dark">
			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<meta name="description" content="SMME Piston Cup — Pakistan's first university-affiliated off-road racing tournament held at NUST." />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
