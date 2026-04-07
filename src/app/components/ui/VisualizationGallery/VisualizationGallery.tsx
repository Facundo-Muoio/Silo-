"use client";
import { useMessages } from "next-intl";
import {
	useVisualization,
	VisualizationContextType,
} from "@/src/app/contexts/VisualizationProvider";
import Thumbnail from "../Thumbnail/Thumbnail";
import GridArchive from "../GridAchive/GridArchive";

interface selectedItem {
	id: number;
	name: string;
	year: string;
	location: string;
	client: string;
}

const srcsThumbnails = [
	"/images/visualization/selected/1- Proyecto_ Nuevo aulario de Logroño, Universidad de La Rioja_2.webp",
	"/images/visualization/selected/2- Proyecto_ Segunda escuela secundaria de Podgorica, Montenegro_2.webp",
	"/images/visualization/selected/3- Proyecto_ Edificio destinado a la investigación en el ámbito de las Ciencias de la Salud_1.webp",
	"/images/visualization/selected/4- Proyecto_  Housing Conci_2.webp",
	"/images/visualization/selected/5- Proyecto_ Salon de eventos “La Paz”_2.webp",
	"/images/visualization/selected/6- Proyecto_ Casa BS_2.webp",
	"",
	"/images/visualization/selected/8- Proyecto_ Casa Escondida_1.webp",
];

export default function VisualizationGallery() {
	const { state } = useVisualization() as VisualizationContextType;
	const messages = useMessages();
	const lengthItems = messages.Visualization.selected.length;
	const selectedItems = messages.Visualization.selected.slice(0, lengthItems);
	console.log(messages);
	console.log({ selectedItems });
	const width =
		state === "Seleccionados" || state === "Selected"
			? "max-w-[1300px]"
			: "w-full";

	return (
		<div
			className={`container-visualization w-full max-w-[1300px] px-6 md:px-10 mb-4 ${width} mx-auto`}
		>
			{(state === "Selected" || state === "Seleccionados") && (
				<div className="grid grid-cols-2 gap-10 md:gap-24 mb-6 place-content-between mt-6">
					{selectedItems.map((project: selectedItem, index: number) => {
						if (index + 1 !== 7)
							return (
								<Thumbnail
									href={`selected/${project.id}`}
									isEven={(index + 1) % 2 === 0}
									key={project.id}
									index={index}
									src={srcsThumbnails[index]}
									name={project.name}
									year={Number(project.year)}
									onlySeeName={true}
									hoverEffect="lighten"
									parentFolder="/visualization/"
								/>
							);
						if (index + 1 === 8) return null;
					})}
				</div>
			)}
			{(state === "Archive" || state === "Archivo") && <GridArchive />}
		</div>
	);
}
