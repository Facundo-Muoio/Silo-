type Localized = { en: string; es: string };

type ThumbnailRaw = {
	id: string;
	src: string;
	href: string;
	name: Localized;
	year: number;
	status: Localized;
	hasMention: boolean;
};

type typeThumbnails = "architecture" | "visualization";

const thumbnailsRawArchiteecture: ThumbnailRaw[] = [
	{
		id: "1",
		src: "/images/architecture/school/4.webp",
		href: "/school",
		name: {
			en: "International Competition for the Design of the Second High School in Podgorica, Montenegro",
			es: "Concurso Internacional para el Diseño de la Segunda Escuela Secundaria en Podgorica, Montenegro",
		},
		year: 2025,
		status: { en: "Second Prize", es: "Segundo Premio" },
		hasMention: true,
	},
	{
		id: "2",
		src: "/images/architecture/governament_SF/1.webp",
		href: "/governament_SF",
		name: {
			en: "Municipal Government Headquarters of the City of San Francisco",
			es: "Sede del Gobierno Municipal de la Ciudad de San Francisco",
		},
		year: 2025,
		status: { en: "Proposal", es: "Propuesta" },
		hasMention: false,
	},
	{
		id: "3",
		src: "/images/architecture/economic_sciences_SL/04.webp",
		href: "/economic_sciences_SL",
		name: {
			en: "Professional Council of Economic Sciences of San Luis Building",
			es: "Edificio del Consejo Profesional de Ciencias Económicas de San Luis",
		},
		year: 2025,
		status: { en: "Proposal", es: "Propuesta" },
		hasMention: false,
	},
	{
		id: "4",
		src: "/images/architecture/campo_la_macarena/7.webp",
		href: "/campo_la_macarena",
		name: {
			en: "“Campo La Macarena” Sports Area",
			es: "Área deportiva  “Campo La Macarena”",
		},
		year: 2024,
		status: { en: "Propopsal", es: "Propuesta" },
		hasMention: false,
	},
	{
		id: "5",
		src: "/images/architecture/llanto_tlaloc/1.webp",
		href: "/llanto_tlaloc",
		name: {
			en: "“The Weeping of Tlaloc”",
			es: "“El llanto de Tláloc”",
		},
		year: 2023,
		status: { en: "Honorable Mention", es: "Mención de Honor" },
		hasMention: true,
	},
];

export type ThumbnailForGallery = {
	id: string;
	src: string;
	href: string;
	name: string;
	year: number;
	status: string;
	hasMention: boolean;
};

/**
 * Devuelve los thumbnails con `name` y `status` según la cookie de idioma (`en` / `es`).
 */
export function getThumbnails(
	locale: string,
	type: typeThumbnails,
): ThumbnailForGallery[] {
	const lang = locale === "es" ? "es" : "en";
	const source =
		type === "architecture"
			? thumbnailsRawArchiteecture
			: thumbnailsRawArchiteecture;

	return source.map(t => ({
		id: t.id,
		src: t.src,
		href: t.href,
		year: t.year,
		name: t.name[lang],
		status: t.status[lang],
		hasMention: t.hasMention,
	}));
}
