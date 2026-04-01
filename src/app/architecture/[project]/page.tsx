import Slider from "../../components/ui/Slider/Slider";
import { architecture } from "../../../Projects_data/Architecture";
import InfoProject from "../../components/ui/InfoProject/InfoProject";
import { cookies } from "next/headers";
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
	const arrayImages = architecture[projectName];

	return (
		<>
			<div className="grid grid-cols-[40%_60%] gap-8 w-full px-10 py-5">
				<InfoProject nameProject={projectName} />
				<Slider
					slides={arrayImages}
					className="w-full max-w-[800px]"
					loop={false}
					showDots={false}
				/>
			</div>
			<SecondaryFooter lenguage={lenguage} />
		</>
	);
}
