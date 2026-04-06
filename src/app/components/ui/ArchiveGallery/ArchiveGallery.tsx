"use client";
import Slider from "../Slider/Slider";
import { useTranslations } from "next-intl";
import { archives_data } from "@/src/Projects_data/Achive";
import SecondaryFooter from "../SecondaryFooter/SecondaryFooter";
import { useLenguage } from "@/src/app/contexts/LenguageProvider";
import { useState } from "react";

interface Props {
	id: number;
}

export default function ArchiveGallery({ id }: Props) {
	const t = useTranslations("Visualization");
	const archives = t.raw("archive");
	const lenguage = useLenguage() as "en" | "es";
	const [currentIndex, setCurrentIndex] = useState(id - 1);
	const staggerStepMs = 200;
	const handler = (buttonPressed: string) => {
		if (buttonPressed === "prev") {
			setCurrentIndex(currentIndex - 1);
		}
		if (buttonPressed === "next") {
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<div className="container_archive_gallery flex flex-col lg:flex-row h-auto p-10 gap-8 relative w-full">
			<div className="lg:absolute lg:left-10 lg:top-10 text-sm lg:text-base flex flex-col items-start justify-center gap-4 max-w-[225px]">
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${0 * staggerStepMs}ms` }}
				>
					{archives[currentIndex].name}
				</h3>
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${1 * staggerStepMs}ms` }}
				>
					{archives[currentIndex].year}
				</h3>
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${2 * staggerStepMs}ms` }}
				>
					{archives[currentIndex].client}
				</h3>
			</div>
			<Slider
				initialIndex={id - 1}
				slides={archives_data}
				className="w-full max-w-full"
				loop={false}
				showDots={false}
				classNameContainer="lg:absolute lg:left-1/2 lg:-translate-x-1/2  w-full lg:max-w-[63vw] relative"
				aspectRatio="aspect-[16/9] md:aspect-[16/9]"
				onSlideChange={handler}
			/>
			<SecondaryFooter
				lenguage={lenguage}
				className="relative top-10 -right-10 lg:h-[75vh] -z-1 items-end"
			/>
		</div>
	);
}
