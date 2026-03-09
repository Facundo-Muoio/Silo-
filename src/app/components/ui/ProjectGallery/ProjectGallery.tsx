"use client";

import { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Thumbnail from "../Thumbnail/Thumbnail";

type Project = {
	src: string;
	name: string;
	year: number;
	status: string;
};

type ProjectGalleryProps = {
	projects: Project[];
};

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
	const [viewMode, setViewMode] = useState<"gallery" | "table">("gallery");

	return (
		<div
			className={`${viewMode === "gallery" ? "w-[80vw]" : "w-[100vw] p-8"} mx-auto`}
		>
			{/* Vista de Galería */}
			{viewMode === "gallery" && (
				<div>
					{/* Botones para cambiar de vista - visible en modo galería */}
					<div className="flex justify-end mb-6 gap-2">
						<button
							onClick={() => setViewMode("gallery")}
							className="p-1 transition-opacity duration-200 hover:opacity-70 cursor-pointer"
							aria-label="Vista de galería activa"
							disabled
						>
							<IoGrid className="text-xl text-gray-900" />
						</button>
						<button
							onClick={() => setViewMode("table")}
							className="p-1 transition-opacity duration-200 hover:opacity-70 cursor-pointer"
							aria-label="Cambiar a vista de tabla"
						>
							<FaThList className="text-xl text-gray-400" />
						</button>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{projects.map((project, index) => (
							<Thumbnail
								key={index}
								src={project.src}
								name={project.name}
								year={project.year}
							/>
						))}
					</div>
				</div>
			)}

			{/* Vista de Tabla */}
			{viewMode === "table" && (
				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b border-gray-300 header-animate">
								<th className="px-4 py-2 text-left font-bold uppercase text-gray-900 w-[70%]">
									PROYECTO
								</th>
								<th className="px-4 py-2 text-left font-bold uppercase text-gray-900">
									AÑO
								</th>
								<th className="px-4 py-2 text-left font-bold uppercase text-gray-900">
									ESTADO
								</th>
								<th className="px-4 py-2 text-left">
									<div className="flex items-center justify-end gap-2">
										<button
											onClick={() => setViewMode("gallery")}
											className="p-1 transition-opacity duration-200 hover:opacity-70 cursor-pointer"
											aria-label="Cambiar a vista de galería"
										>
											<IoGrid className="text-xl text-gray-400" />
										</button>
										<button
											onClick={() => setViewMode("table")}
											className="p-1 transition-opacity duration-200 hover:opacity-70 cursor-pointer"
											aria-label="Vista de tabla activa"
											disabled
										>
											<FaThList className="text-xl text-gray-900" />
										</button>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project, index) => (
								<tr
									key={index}
									className="border-b border-gray-300 cursor-default transition-text duration-100 hover:text-black text-gray-500 row-animate"
									style={{ animationDelay: `${0.15 + index * 0.08}s` }}
								>
									<td className="p-4 text-left text-inherit cursor-pointer">
										{project.name}
									</td>
									<td className="p-4 text-left text-inherit cursor-pointer">
										{project.year}
									</td>
									<td className="p-4 text-left text-inherit cursor-pointer">
										{project.status}
									</td>
									<td className="p-4"></td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
