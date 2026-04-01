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
		<div className="container-atelier flex items-center p-10 gap-8 absolute top-1/2 -translate-y-1/2  w-fit">
			<div
				className={`relative w-[600px] max-w-[600px] h-[685px] animate-fade-slide ${animate}`}
				style={{ animationDelay: "400ms" }}
			>
				<Image
					src={"/images/atelier/_01 Imagen base.webp"}
					alt="The founders of silo"
					className="object-cover"
					fill
				/>
			</div>

			<div className="w-[650px] max-w-[650px] text-justify flex flex-col gap-6">
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
