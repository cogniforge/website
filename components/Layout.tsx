import Head from "next/head";
import { ReactNode } from "react";

type Props = {
	title?: string;
	children: ReactNode;
};

export default function Layout({ title, children }: Props) {
	return (
		<div>
			<Head>
				<title>{title + " | Cogniforge" || "Cogniforge"}</title>
				<meta
					name="description"
					content="Learning for all through collaborative projects and peer-to-peer collaboration."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />

				<meta name="theme-color" content="#9900ff" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Cogniforge" />
				<meta
					property="og:description"
					content="Learning for all through collaborative projects and peer-to-peer collaboration."
				/>
				<meta property="og:url" content="https://cogniforge.org" />
				<meta property="og:site_name" content="Cogniforge" />
				<meta property="og:image" content="/og-image.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Cogniforge" />
				<meta
					name="twitter:description"
					content="Learning for all through collaborative projects and peer-to-peer collaboration."
				/>
				<meta name="twitter:url" content="https://cogniforge.org" />
				<meta name="twitter:site" content="@cogniforge" />
				<meta name="twitter:creator" content="@cogniforge" />
				<meta name="twitter:image" content="/og-image.png" />
			</Head>
			{children}
		</div>
	);
}
