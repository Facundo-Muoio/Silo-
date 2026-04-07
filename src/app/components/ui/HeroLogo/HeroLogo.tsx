"use client";
import { useMounted } from "@/src/app/hooks/useMounted";
import Image from "next/image";

export default function HeroLogo() {
	const mounted = useMounted();
	const animate = mounted ? "animate-fade-slide-up" : "";

	return (
		<div
			className={`max-sm:w-[300px] w-[350px] h-[90dvh] mx-auto flex items-center ${animate}`}
			style={{ animationDelay: "400ms" }}
		>
			{" "}
			<Image
				src="/images/Logo.webp"
				alt="Logo Silo"
				width={350}
				height={350}
				className="object-contain"
			/>
		</div>
	);
}
