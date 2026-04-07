import ProjectGallery from "../components/ui/ProjectGallery/ProjectGallery";

export default async function page() {
	return (
		<div className="w-full pt-8 flex flex-col min-h-[90vh]">
			<ProjectGallery />
		</div>
	);
}
