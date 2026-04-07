import { cookies } from "next/headers";
import ArchitectureProject from "../../components/ui/ArchitectureProject/ArchitectureProject";
import SecondaryFooter from "../../components/ui/SecondaryFooter/SecondaryFooter";

export default async function page({
	params,
}: {
	params: Promise<{
		project:
			| "school"
			| "governament_SF"
			| "economic_sciences_SL"
			| "campo_la_macarena"
			| "llanto_tlaloc";
	}>;
}) {
	const cookieStore = await cookies();
	const lenguage = (cookieStore.get("silo_lenguage")?.value || "en") as
		| "en"
		| "es";
	const { project: projectName } = await params;

	return (
		<>
			<ArchitectureProject projectName={projectName} />
			<SecondaryFooter lenguage={lenguage} />
		</>
	);
}
