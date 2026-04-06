import Atelier from "../components/ui/Atelier/Atelier";
import SecondaryFooter from "../components/ui/SecondaryFooter/SecondaryFooter";
import { cookies } from "next/headers";

export default async function page() {
	const cookieStore = await cookies();
	const lenguage = (cookieStore.get("silo_lenguage")?.value || "en") as
		| "en"
		| "es";

	return (
		<>
			<Atelier />
			<SecondaryFooter lenguage={lenguage} />
		</>
	);
}
