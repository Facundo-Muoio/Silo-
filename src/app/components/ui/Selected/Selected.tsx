import SelectedInfo from "../SelectedInfo/SelectedInfo";
import Slider from "../Slider/Slider";
import { selectedImages } from "@/src/Projects_data/Selected";
import SecondaryFooter from "../SecondaryFooter/SecondaryFooter";

interface Props {
	id: 1 | 2 | 3 | 4 | 5 | 6 | 8;
	lenguage: "en" | "es";
}

export default function Selected({ id, lenguage }: Props) {
	const images = selectedImages[id];
	return (
		<div className="container_selected flex flex-col gap-8 relative p-10 w-full h-screen">
			<SelectedInfo id={id} className="lg:absolute lg:left-10 lg:top-10" />
			<Slider
				slides={images}
				className="w-full max-w-full lg:max-w-[50vw]"
				loop={false}
				showDots={true}
				classNameContainer="lg:absolute lg:left-1/2 lg:-translate-x-1/2  w-full lg:max-w-[50vw] items-start"
			/>
			<SecondaryFooter
				lenguage={lenguage}
				className="lg:absolute lg:bottom-0 lg:right-0 mx-10"
			/>
		</div>
	);
}
