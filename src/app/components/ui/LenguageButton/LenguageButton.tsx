"use client";
import { toggleLenguageAction } from "@/src/app/actions/lenguage";
import { useLenguage } from "@/src/app/contexts/LenguageProvider";

export default function LenguageButton() {
	const currentLanguage = useLenguage();
	return (
		<button className="cursor-pointer w-fit" onClick={toggleLenguageAction}>
			<span
				className={`transition-all duration-150 ${
					currentLanguage === "en" ? "font-bold " : ""
				}`}
			>
				EN
			</span>
			<span className="font-bold"> | </span>
			<span
				className={`transition-all duration-250 ${
					currentLanguage === "es" ? "font-bold " : ""
				}`}
			>
				ES
			</span>
		</button>
	);
}
