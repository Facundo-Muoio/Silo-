"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMounted } from "@/src/app/hooks/useMounted";
import { members } from "@/src/Projects_data/Members";
import Accordion from "../Accordion/Accordion";

export default function Atelier() {
	const t = useTranslations("Atelier");
	const manifestRaw = t.raw("manifest") as string;
	const paragraphs = manifestRaw.split("<break></break><break></break>");
	const staggerStepS = 150;
	const mounted = useMounted();
	const animate = mounted ? "animate-fade-in-up" : "opacity-0";
	const founderAnimateEntrance = mounted
		? "animate-slide-in-left"
		: "opacity-0";

	return (
		<>
			<div className="container-atelier flex flex-col lg:flex-row px-6 md:p-10 gap-8 w-full relative">
				<div
					className={`top-0 w-full aspect-[3/4] md:aspect-square lg:sticky lg:aspect-[3/4] lg:h-screen lg:max-h-[680px] lg:max-w-[625px]  animate-fade-slide lg:mt-[6px] ${animate}`}
					style={{ animationDelay: "400ms" }}
				>
					<Image
						src={"/images/atelier/_01 Imagen base.webp"}
						alt="The founders of silo"
						className="object-cover"
						fill
					/>
				</div>

				<div className="w-full text-justify flex flex-col justify-between flex-1 lg:max-w-[680px]">
					{paragraphs.map((text, index) => {
						const htmlContent = text
							.replace(/<bold>/g, '<strong class="font-bold">')
							.replace(/<\/bold>/g, "</strong>");

						return (
							<p
								key={index}
								className={`animate-slide-in-right opacity-0 `}
								style={{
									animationDelay: `${index * staggerStepS}ms`,
									animationFillMode: "forwards",
								}}
								dangerouslySetInnerHTML={{ __html: htmlContent }}
							/>
						);
					})}
				</div>
			</div>
			<div className="container-founders px-6 md:p-10 max-md:my-12 w-full">
				<h2
					className={`divide-solid bold text-lg font-bold border-b-1 border-gray-400 pb-1 mb-1 ${founderAnimateEntrance}`}
				>
					Founders
				</h2>
				<Accordion>
					{members.map(({ name, src, alt, textContent }, index) => (
						<Accordion.Item
							key={name}
							name={name}
							src={src}
							alt={alt}
							textContent={textContent}
							delay={String(0.15 + index * 0.08) + "s"}
						/>
					))}
				</Accordion>
			</div>
		</>
	);
}
