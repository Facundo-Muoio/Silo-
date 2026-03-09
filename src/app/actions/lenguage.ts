"use server";

import { cookies } from "next/headers";

export async function toggleLenguageAction() {
	const cookieStorage = await cookies();
	const currentLanguage = cookieStorage.get("silo_lenguage")?.value || "en";
	const newLengauge = currentLanguage === "en" ? "es" : "en";

	cookieStorage.set("silo_lenguage", newLengauge, {
		httpOnly: true,
		sameSite: "strict",
	});
}
