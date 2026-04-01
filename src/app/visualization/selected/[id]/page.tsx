import SecondaryFooter from "@/src/app/components/ui/SecondaryFooter/SecondaryFooter";
import SelectedInfo from "@/src/app/components/ui/SelectedInfo/SelectedInfo";
import Slider from "@/src/app/components/ui/Slider/Slider";
import { selectedImages } from "@/src/Projects_data/Selected";
import { cookies } from "next/headers";

interface Props {
	params: Promise<{ id: 1 | 2 | 3 | 4 | 5 | 6 | 8 }>;
}

export default async function page({ params }: Props) {
	const cookieStore = await cookies();
	const lenguage = (cookieStore.get("silo_lenguage")?.value || "en") as
		| "en"
		| "es";
	const { id } = await params;
	console.log(id, typeof id);
	const images = selectedImages[id];
	return (
		<>
			<div className="w-full p-10 relative">
				<SelectedInfo id={id} />
				<div className="absolute top-0 min-w-full">
					<Slider
						slides={images}
						className="w-full max-w-[50vw] mt-10"
						loop={false}
						showDots={true}
					/>
				</div>
			</div>
			<div className="fixed bottom-0 mt-10 w-full">
				<SecondaryFooter lenguage={lenguage} />
			</div>
		</>
	);
}
