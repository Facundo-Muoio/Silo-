"use client";
import InfoProject from "../InfoProject/InfoProject";
import Slider from "../Slider/Slider";
import { architecture } from "@/src/Projects_data/Architecture";
import useClickImage from "@/src/app/hooks/useClickImage";
import ModalImage from "../ModalImage/ModalImage";

interface Props {
	projectName:
		| "school"
		| "governament_SF"
		| "economic_sciences_SL"
		| "campo_la_macarena"
		| "llanto_tlaloc";
}

export default function ArchitectureProject({ projectName }: Props) {
	const arrayImages = architecture[projectName];
	const { alt, handlerClick, isOpen, onClose, src } = useClickImage();
	return (
		<div className="flex flex-wrap lg:flex-nowrap gap-8 w-full px-6 md:px-10 py-8">
			<InfoProject
				nameProject={projectName}
				className="w-full lg:w-[45%] self-center"
			>
				<Slider
					slides={arrayImages}
					className="w-full max-w-[1000px]"
					classNameImage="landscape:max-lg:object-contain"
					loop={false}
					showDots={false}
					classNameContainer="w-full lg:hidden"
					animationDelay="0ms"
					onClick={handlerClick}
				/>
			</InfoProject>
			<Slider
				slides={arrayImages}
				className="w-full full max-w-[1000px] h-full"
				classNameImage="min-lg:object-contain"
				loop={false}
				showDots={false}
				classNameContainer="hidden lg:flex w-full sticky top-0 h-[100svh]"
				onClick={handlerClick}
			/>
			<ModalImage src={src} alt={alt} isOpen={isOpen} onClose={onClose} />
		</div>
	);
}
