import ProjectGallery from "../components/ui/ProjectGallery/ProjectGallery";
import SecondaryFooter from "../components/ui/SecondaryFooter/SecondaryFooter";
import { cookies } from "next/headers";

export default async function page() {
	const cookieStore = await cookies();
	const lenguage = (cookieStore.get("silo_lenguage")?.value || "en") as
		| "en"
		| "es";

	return (
		<div className="w-full pt-8">
			<ProjectGallery />
			<SecondaryFooter lenguage={lenguage} />
		</div>
	);
}
