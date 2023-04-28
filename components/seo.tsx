import { DefaultSeo } from "next-seo";

const config = {
	title: "Sai Krishna - FullStack Developer ",
	description: "I’m a fullstack developer who loves to create stuff!",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://krishnagottipalli.github.io/portfolio",
		site_name: "Sai Krishna",
		images: [
			{
				url: "https://krishnagottipalli.github.io/og.jpg",
				alt: "Sai Krishna",
			},
		],
	},
};

const SEO = (): JSX.Element => {
	return <DefaultSeo {...config} />;
};

export default SEO;
