"use client";
import { useLenguage } from "@/src/app/contexts/LenguageProvider";
import { useVisualization } from "@/src/app/contexts/VisualizationProvider";
import { VisualizationContextType } from "@/src/app/contexts/VisualizationProvider";

interface PropsButton {
	href: string;
	labelEn: string;
	labelEs: string;
	className?: string;
}

export default function Button({ labelEn, labelEs, className }: PropsButton) {
	const { state, setState } = useVisualization() as VisualizationContextType;
	const currentLenguage = useLenguage();
	const label = currentLenguage === "en" ? labelEn : labelEs;
	const boldText = state === labelEn || state === labelEs ? "font-bold" : "";

	const handlerClick = () => {
		setState(label);
	};

	return (
		<button
			className={`cursor-pointer ${boldText} ${className}`}
			onClick={handlerClick}
		>
			{label}
		</button>
	);
}
