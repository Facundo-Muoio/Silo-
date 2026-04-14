import { useTranslations } from "next-intl";
import Link from "next/link";
import Dropdown, { DropdownItem } from "../Dropdown/Dropdown";
// import Image from "next/image";

export default function Footer() {
	const logo = useTranslations("Logo");
	const text = useTranslations("Footer");
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="w-full text-base xl:text-lg h-[45dvh] min-h-fit max-sm:max-h-fit bg-[url(/images/FooterBg.webp)] bg-repeat bg-cover p-6 md:p-10 flex  flex-col lg:flex-wrap justify-between z-10 relative">
			<div className="w-[95%] flex flex-wrap md:flex-nowrap gap-4 justify-between items-baseline">
				<h2 className="text-[28px] xl:text-[32px]">{logo("title")}</h2>
				<p>{text("paragraph")}</p>
				<ul className="flex flex-col">
					<li className="font-bold">{text("social")}</li>
					<li>
						<Dropdown
							buttonTag="INSTAGRAM"
							className="hover:font-bold transition-all duration-150"
						>
							<DropdownItem delay={String(0.15 + 0 * 0.08) + "s"}>
								<Link
									href="https://www.instagram.com/silo.arq/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:font-bold transition-all duration-150"
								>
									ARQ_INSTAGRAM
								</Link>
							</DropdownItem>
							<DropdownItem delay={String(0.15 + 1 * 0.08) + "s"}>
								<Link
									href="https://www.instagram.com/silo.viz/"
									target="_blank"
									className="hover:font-bold transition-all duration-150"
									rel="noopener noreferrer"
								>
									VIZ_INSTAGRAM
								</Link>
							</DropdownItem>
						</Dropdown>
					</li>
					<li>
						<Link
							target="_blank"
							href="https://www.linkedin.com/company/siloviz/"
							className="hover:font-bold transition-all duration-150"
						>
							{text("linkedin")}
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							href="https://www.behance.net/siloarchviz"
							className="hover:font-bold transition-all duration-150"
						>
							{text("behance")}
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex flex-col md:flex-row max-md:justify-start justify-end  w-full mt-4">
				<span className=" mr-[30%]">
					{"< "}MUOIO_DEVELOPMENT{" >"}
				</span>{" "}
				<span className="">{year + " " + text("copy")}</span>
			</div>
		</div>
	);
}

/* <span className=" mr-[30%]">
					{"< "}MUOIO_DEVELOPMENTS{" >"}
				</span> */

/*				<div className="relative w-[90px]  aspect-square">
									<Image
										fill
										src="/images/logo_personal.png"
										alt="logo personal"
										className="object-contain"
									/>
								</div>; */
