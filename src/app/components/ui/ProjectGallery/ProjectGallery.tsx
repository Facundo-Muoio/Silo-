"use client";

import { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Thumbnail from "../Thumbnail/Thumbnail";
import { useMounted } from "@/src/app/hooks/useMounted";
import Link from "next/link";
import { getThumbnails } from "@/src/Projects_data/Thumbnails";
import { useLenguage } from "@/src/app/contexts/LenguageProvider";

type Thumbnail = {
	id: string;
	src: string;
	href: string;
	name: string;
	year: number;
	status: string;
};

export default function ProjectGallery() {
	const lenguage = useLenguage();
	const [viewMode, setViewMode] = useState<"gallery" | "table">("gallery");
	const mounted = useMounted();
	const fadeSlideUp = mounted ? "animate-fade-slide-up" : "opacity-0";
	const headerAnimate = mounted ? "header-animate" : "opacity-0";
	const rowAnimate = mounted ? "row-animate" : "opacity-0";
	const thumbnails = getThumbnails(lenguage, "architecture");

	return (
		<div
			className={`${viewMode === "gallery" ? "w-[80vw] max-w-[1300px]" : "w-[80vw]"} mx-auto`}
		>
			{/* Vista de Galería */}
			{viewMode === "gallery" && (
				<div>
					{/* Botones para cambiar de vista - visible en modo galería */}
					<div className={`flex justify-end mb-6 gap-2 ${fadeSlideUp}`}>
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
					<div className="grid grid-cols-2 gap-24 place-content-between">
						{thumbnails.map((project, index) => (
							<Thumbnail
								href={project.href}
								isEven={(index + 1) % 2 === 0}
								key={project.id}
								index={index}
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
				<div className="overflow-x-auto overflow-y-hidden">
					<table className="w-full border-collapse">
						<thead>
							<tr className={`border-b border-gray-300 ${headerAnimate}`}>
								<th className="px-4 py-2 text-left font-bold uppercase text-gray-900 w-[70%]">
									{lenguage === "en" ? "PROJECT" : "PROYECTO"}
								</th>
								<th className="px-4 py-2 text-left font-bold uppercase text-gray-900">
									{lenguage === "en" ? "YEAR" : "AÑO"}
								</th>
								<th className="px-4 py-2 text-left font-bold uppercase text-gray-900">
									{lenguage === "en" ? "STATE" : "ESTADO"}
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
							{thumbnails.map((project, index) => (
								<tr
									key={index}
									className={`border-b border-gray-300 cursor-default transition-text duration-100 hover:text-black text-gray-500 ${rowAnimate}`}
									style={{ animationDelay: `${0.15 + index * 0.08}s` }}
								>
									<td className="p-4 text-left text-inherit cursor-pointer">
										<Link href={`/architecture/${project.href}`}>
											{project.name}
										</Link>
									</td>
									<td className="p-4 text-left text-inherit cursor-pointer">
										<Link href={`/architecture/${project.href}`}>
											{project.year}
										</Link>
									</td>
									<td className="p-4 text-left text-inherit cursor-pointer">
										<Link href={`/architecture/${project.href}`}>
											{project.status}
										</Link>
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
