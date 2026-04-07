"use client";
import Slider from "../Slider/Slider";
import { useTranslations } from "next-intl";
import { archives_data } from "@/src/Projects_data/Achive";
import SecondaryFooter from "../SecondaryFooter/SecondaryFooter";
import { useLenguage } from "@/src/app/contexts/LenguageProvider";
import { useState } from "react";
import useClickImage from "@/src/app/hooks/useClickImage";
import ModalImage from "../ModalImage/ModalImage";
interface Props {
	id: number;
}

export default function ArchiveGallery({ id }: Props) {
	const t = useTranslations("Visualization");
	const archives = t.raw("archive");
	const lenguage = useLenguage() as "en" | "es";
	const project = lenguage === "en" ? "Project_" : "Proyecto_";
	const year = lenguage === "en" ? "Year_" : "Año_";
	const client = lenguage === "en" ? "Client_" : "Cliente_";
	const [currentIndex, setCurrentIndex] = useState(id - 1);
	const staggerStepMs = 200;
	const { isOpen, alt, src, handlerClick, onClose } = useClickImage();

	const handler = (buttonPressed: string) => {
		if (buttonPressed === "prev") {
			setCurrentIndex(currentIndex - 1);
		}
		if (buttonPressed === "next") {
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<>
			<div className="container_archive_gallery flex relative flex-col lg:flex-row h-auto min-h-[90svh] max-sm:gap-12 p-6 md:p-10 gap-8 w-full">
				<div className="text-base lg:absolute lg:left-10 lg:top-10 flex flex-col items-start justify-center gap-4 max-w-[250px] xl:max-w-[320px] max-sm:ml-[20px] max-md:ml-[36px]">
					<h3
						className="animate-slide-in-left"
						style={{ animationDelay: `${0 * staggerStepMs}ms` }}
					>
						<span className="font-bold">{project}</span>{" "}
						{archives[currentIndex]?.name}
					</h3>
					<h3
						className="animate-slide-in-left"
						style={{ animationDelay: `${1 * staggerStepMs}ms` }}
					>
						<span className="font-bold">{year}</span>{" "}
						{archives[currentIndex]?.year}
					</h3>
					<h3
						className="animate-slide-in-left"
						style={{ animationDelay: `${2 * staggerStepMs}ms` }}
					>
						<span className="font-bold">{client}</span>{" "}
						{archives[currentIndex]?.client}
					</h3>
				</div>
				<Slider
					initialIndex={id - 1}
					slides={archives_data}
					className="w-full max-w-full"
					loop={false}
					showDots={false}
					classNameContainer="lg:absolute lg:left-1/2 lg:-translate-x-1/2  w-full lg:max-w-[63vw] relative"
					aspectRatio="md:aspect-[16/9]"
					onSlideChange={handler}
					onClick={handlerClick}
					classNameImage="landscape:object-contain portrait:object-cover"
				/>
			</div>
			<ModalImage src={src} alt={alt} isOpen={isOpen} onClose={onClose} />
			<SecondaryFooter lenguage={lenguage} className="lg:fixed bottom-0" />
		</>
	);
}
