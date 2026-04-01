"use client";
import { useMounted } from "@/src/app/hooks/useMounted";
import Image from "next/image";
import Link from "next/link";

type TyThumbnail = {
	name: string;
	src: string;
	href: string;
	year: number;
	isEven: boolean;
	index: number;
	onlySeeName?: boolean;
	hoverEffect?: "darken" | "lighten";
	parentFolder?: string;
};

export default function Thumbnail({
	src,
	href,
	name,
	year,
	isEven,
	index,
	onlySeeName = false,
	hoverEffect = "darken",
	parentFolder = "/architecture/",
}: TyThumbnail) {
	const mounted = useMounted();
	const animate = mounted ? "animate-fade-in-up" : "opacity-0";

	const hoverImageClass =
		hoverEffect === "darken"
			? "group-hover:brightness-50"
			: "group-hover:brightness-100 group-hover:contrast-75";
	const colorTextHover = hoverEffect === "darken" ? "text-white" : "text-black";

	return (
		<Link
			href={`${parentFolder}${href}`}
			className={`thumbnail group relative max-w-[100%] w-full ${animate} aspect-square ${isEven && "place-self-end"} cursor-pointer`}
			style={{ animationDelay: `${0.15 + index * 0.08}s` }}
		>
			{/* Overlay para efecto "luminoso" */}
			{hoverEffect === "lighten" && (
				<div className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/60 z-[50]" />
			)}
			<Image
				src={src}
				alt={name}
				fill
				className={`object-cover transition-all duration-500 ${hoverImageClass}`}
			/>
			<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[100]">
				<span className={`${colorTextHover} font-medium p-4 text-center`}>
					{name} {onlySeeName ? null : year}
				</span>
			</div>
		</Link>
	);
}
