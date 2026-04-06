import VisualizationGallery from "../components/ui/VisualizationGallery/VisualizationGallery";
import GroupButtons from "../components/ui/GroupButtons/GroupButtons";
import Button from "../components/ui/GroupButtons/Button/Button";
import VisualizationProvider from "../contexts/VisualizationProvider";
import { cookies } from "next/headers";
import SecondaryFooter from "../components/ui/SecondaryFooter/SecondaryFooter";

export default async function page() {
	const cookieStore = await cookies();
	const lenguage = (cookieStore.get("silo_lenguage")?.value || "en") as
		| "en"
		| "es";

	return (
		<VisualizationProvider>
			<div>
				<GroupButtons>
					<Button
						href={"/visualization/selected"}
						labelEn="Selected"
						labelEs="Seleccionados"
						className="text-lg"
					/>
					<span className="font-bold text-lg"> | </span>
					<Button
						href={"/visualization/archive"}
						labelEn="Archive"
						labelEs="Archivo"
						className="text-lg"
					/>
				</GroupButtons>
				<VisualizationGallery />
				<SecondaryFooter lenguage={lenguage} />
			</div>
		</VisualizationProvider>
	);
}
