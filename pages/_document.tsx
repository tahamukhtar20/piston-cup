import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en" className="dark">
			<Head>
				<title>SMME Piston Cup</title>
				<meta name="description" content="SMME Piston Cup – Pakistan's premier collegiate off-road racing competition." />
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
