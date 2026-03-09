import ProjectGallery from "../components/ui/ProjectGallery/ProjectGallery";

// Datos de ejemplo - reemplaza con tus datos reales
const projects = [
	{
		src: "/images/project1.jpg",
		name: "Proyecto 1",
		year: 2024,
		status: "Completado",
	},
	{
		src: "/images/project2.jpg",
		name: "Proyecto 2",
		year: 2023,
		status: "En progreso",
	},
	{
		src: "/images/project3.jpg",
		name: "Proyecto 3",
		year: 2022,
		status: "Completado",
	},
	{
		src: "/images/project4.jpg",
		name: "Proyecto 4",
		year: 2021,
		status: "Completado",
	},
];

export default function page() {
	return (
		<div className="w-full py-8">
			<ProjectGallery projects={projects} />
		</div>
	);
}
