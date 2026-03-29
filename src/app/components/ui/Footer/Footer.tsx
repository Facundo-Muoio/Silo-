import { useTranslations } from "next-intl";

export default function Footer() {
	const logo = useTranslations("Logo");
	const text = useTranslations("Footer");
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="w-full text-[16px] xl:text-[18px] h-[45dvh] bg-[url(/images/FooterBg.jpg)] p-10 flex flex-wrap flex-col justify-between">
			<div className="w-[95%] flex flex-wrap md:flex-nowrap gap-4 justify-between items-baseline">
				<h2 className="text-[28px] xl:text-[32px]">{logo("title")}</h2>
				<p>{text("paragraph")}</p>
				<ul className="flex flex-col">
					<li className="font-bold">{text("social")}</li>
					<li>{text("instagram")}</li>
					<li>{text("linkedin")}</li>
					<li>{text("behance")}</li>
				</ul>
			</div>
			<div className="flex flex-col md:flex-row md:justify-end">
				<span className="w-[30%]">CODE_FACU</span>
				<span className="">{year + " " + text("copy")}</span>
			</div>
		</div>
	);
}
