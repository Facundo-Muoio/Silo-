import ArchiveGallery from "@/src/app/components/ui/ArchiveGallery/ArchiveGallery";
import SecondaryFooter from "@/src/app/components/ui/SecondaryFooter/SecondaryFooter";

interface Props {
	params: Promise<{
		id: number;
	}>;
}

export default async function page({ params }: Props) {
	const { id } = await params;
	return <ArchiveGallery id={id} />;
}
