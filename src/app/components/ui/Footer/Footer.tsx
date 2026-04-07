import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
	const logo = useTranslations("Logo");
	const text = useTranslations("Footer");
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="w-full text-base xl:text-lg h-[45dvh] min-h-fit max-sm:max-h-fit bg-[url(/images/FooterBg.jpg)] bg-repeat bg-cover p-6 md:p-10 flex  flex-col sm:flex-wrap justify-between z-10 relative">
			<div className="w-[95%] flex flex-wrap md:flex-nowrap gap-4 justify-between items-baseline">
				<h2 className="text-[28px] xl:text-[32px]">{logo("title")}</h2>
				<p>{text("paragraph")}</p>
				<ul className="flex flex-col">
					<li className="font-bold">{text("social")}</li>
					<li>
						<Link target="_blank" href="https://www.instagram.com/silo.arq/">
							{text("instagram")}
						</Link>
					</li>
					<li>
						<Link target="_blank" href="https://www.linkedin.com/">
							{text("linkedin")}
						</Link>
					</li>
					<li>
						<Link target="_blank" href="https://www.behance.net/siloarchviz">
							{text("behance")}
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex flex-col md:flex-row max-md:justify-start justify-end mt-4">
				<span className="w-[30%]">CODE_FACU</span>
				<span className="">{year + " " + text("copy")}</span>
			</div>
		</div>
	);
}
