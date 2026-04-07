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
			<div className="flex flex-wrap lg:flex-nowrap gap-8 w-full px-6 md:px-10 py-8">
				<InfoProject
					nameProject={projectName}
					className="w-full lg:w-[45%] self-center"
				>
					<Slider
						slides={arrayImages}
						className="w-full max-w-[1000px]"
						classNameImage="landscape:max-lg:object-contain"
						loop={false}
						showDots={false}
						classNameContainer="w-full lg:hidden"
						animationDelay="0ms"
					/>
				</InfoProject>
				<Slider
					slides={arrayImages}
					className="w-full full max-w-[1000px] h-full"
					classNameImage="min-lg:object-contain"
					loop={false}
					showDots={false}
					classNameContainer="hidden lg:flex w-full sticky top-0 h-[100svh]"
				/>
			</div>
			<SecondaryFooter lenguage={lenguage} />
		</>
	);
}
