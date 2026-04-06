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
			<div className="flex flex-wrap lg:flex-nowrap gap-8 w-full px-10 py-5">
				<InfoProject
					nameProject={projectName}
					className="w-full lg:w-[45%]"
					children={
						<Slider
							slides={arrayImages}
							className="w-full max-w-[800px]"
							loop={false}
							showDots={false}
							classNameContainer="w-full lg:hidden"
							animationDelay="0ms"
						/>
					}
				/>
				<Slider
					slides={arrayImages}
					className="w-full max-w-[800px] h-full"
					loop={false}
					showDots={false}
					classNameContainer="hidden lg:flex w-full sticky top-0 h-screen"
				/>
			</div>
			<SecondaryFooter lenguage={lenguage} />
		</>
	);
}
