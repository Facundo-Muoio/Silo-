import { cookies } from "next/headers";
import Contact from "../components/ui/Contact/Contact";
import SecondaryFooter from "../components/ui/SecondaryFooter/SecondaryFooter";

export default async function page() {
	const cookieStore = await cookies();
	const lenguage = (cookieStore.get("silo_lenguage")?.value || "en") as
		| "en"
		| "es";
	return (
		<>
			<Contact />
			<SecondaryFooter
				lenguage={lenguage}
				className="fixed bottom-0 right-0 landscape:max-lg:static landscape:max-lg:text-xs max-lg:mt-6"
			/>
		</>
	);
}
