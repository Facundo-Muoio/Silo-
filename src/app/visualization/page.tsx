import VisualizationGallery from "../components/ui/VisualizationGallery/VisualizationGallery";
import GroupButtons from "../components/ui/GroupButtons/GroupButtons";
import Button from "../components/ui/GroupButtons/Button/Button";
import VisualizationProvider from "../contexts/VisualizationProvider";

export default async function page() {
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
						labelEs="Archivos"
						className="text-lg"
					/>
				</GroupButtons>
				<VisualizationGallery />
			</div>
		</VisualizationProvider>
	);
}
