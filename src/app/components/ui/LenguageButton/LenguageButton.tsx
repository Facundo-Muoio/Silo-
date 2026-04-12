"use client";
import { toggleLenguageAction } from "@/src/app/actions/lenguage";
import { useLenguage } from "@/src/app/contexts/LenguageProvider";

export default function LenguageButton() {
	const currentLanguage = useLenguage();
	return (
		<button className=" cursor-pointer w-fit" onClick={toggleLenguageAction}>
			<span
				className={`transition-all duration-300 hover:!text-black hover:font-bold group-hover:text-gray-400 ${
					currentLanguage === "en" ? "font-bold " : ""
				}`}
			>
				EN
			</span>
			<span className="font-bold transition-all duration-300 group-hover:text-gray-400">
				{" "}
				|{" "}
			</span>
			<span
				className={`transition-all duration-300 hover:!text-black hover:font-bold group-hover:text-gray-400 ${
					currentLanguage === "es" ? "font-bold " : ""
				}`}
			>
				ES
			</span>
		</button>
	);
}
