interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Filip Šarlej', // Site author
	title: 'pozorOVA - Ostrava otevřeně', // Site title.
	description: 'Blog o šílených nápadech a ostravských WTFs.', // Description to display in the meta tags
	lang: 'cs-CZ',
	ogLocale: 'cs_CZ',
	shareMessage: 'Sdílet článek', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
