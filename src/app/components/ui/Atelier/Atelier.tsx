"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMounted } from "@/src/app/hooks/useMounted";

export default function Atelier() {
	const t = useTranslations("Atelier");
	const manifestRaw = t.raw("manifest") as string;
	const paragraphs = manifestRaw.split("<break></break><break></break>");
	const staggerStepS = 150;
	const mounted = useMounted();
	const animate = mounted ? "animate-fade-in-up" : "opacity-0";

	return (
		<div className="container-atelier flex flex-col lg:flex-row px-6 lg:p-10 gap-8 w-full relative">
			<div
				className={`top-0 w-full aspect-[3/4] md:aspect-square lg:sticky lg:aspect-[3/4] lg:h-screen lg:max-h-[680px] lg:max-w-[625px]  animate-fade-slide ${animate}`}
				style={{ animationDelay: "400ms" }}
			>
				<Image
					src={"/images/atelier/_01 Imagen base.webp"}
					alt="The founders of silo"
					className="object-cover"
					fill
				/>
			</div>

			<div className="w-full text-justify flex flex-col gap-6 lg:max-w-[680px]">
				{paragraphs.map((text, index) => {
					const htmlContent = text
						.replace(/<bold>/g, '<strong class="font-bold">')
						.replace(/<\/bold>/g, "</strong>");

					return (
						<p
							key={index}
							className="animate-slide-in-right leading-relaxed opacity-0"
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
	);
}
