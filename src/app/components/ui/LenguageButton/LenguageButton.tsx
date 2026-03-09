import { cookies } from "next/headers";
import { toggleLenguageAction } from "@/src/app/actions/lenguage";

export default async function LenguageButton() {
	const cookieStore = await cookies();
	const currentLanguage = cookieStore.get("silo_lenguage")?.value || "en";
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
