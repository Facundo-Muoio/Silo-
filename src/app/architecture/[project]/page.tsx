import Slider from "../../components/ui/Slider/Slider";
import { architecture } from "../../../Projects_data/Architecture";
import InfoProject from "../../components/ui/InfoProject/InfoProject";
import { cookies } from "next/headers";

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
	const lenguage = cookieStore.get("silo_lenguage")?.value || "en";
	const { project: projectName } = await params;
	const arrayImages = architecture[projectName];
	const date = new Date();
	const year = date.getFullYear();
	const copyText = lenguage === "en" ? "©SILOARQUITECTES" : "©SILOARQUITECTES";

	return (
		<>
			<div className="grid grid-cols-[40%_60%] gap-8 w-full p-10">
				<InfoProject nameProject={projectName} />
				<Slider
					slides={arrayImages}
					className="w-full max-w-[800px]"
					loop={false}
					showDots={false}
				/>
			</div>
			<div className="flex justify-end p-10 text-lg">{`${year} ${copyText}`}</div>
		</>
	);
}
