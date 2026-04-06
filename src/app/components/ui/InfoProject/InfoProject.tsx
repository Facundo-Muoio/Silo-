"use client";
import { useLenguage } from "@/src/app/contexts/LenguageProvider";
import { useTranslations } from "next-intl";
import React from "react";

type InfoProjectProps = {
	nameProject:
		| "school"
		| "governament_SF"
		| "economic_sciences_SL"
		| "campo_la_macarena"
		| "llanto_tlaloc";
	className?: string;
	children?: React.ReactNode;
};

export default function InfoProject({
	nameProject,
	className,
	children,
}: InfoProjectProps) {
	const lenguage = useLenguage();
	const t = useTranslations("Architecture");
	const p = t(`${nameProject}.description`).split("\n");
	const staggerStepMs = 120;
	const h3Count = 6;

	return (
		<div className={`flex flex-col gap-16 ${className}`}>
			<div className="flex gap-4 flex-col">
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${0 * staggerStepMs}ms` }}
				>
					<span className="font-bold">
						{lenguage === "en" ? "Project_ " : "Projecto_ "}
					</span>
					{t(`${nameProject}.name`)}
				</h3>
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${1 * staggerStepMs}ms` }}
				>
					<span className="font-bold">
						{lenguage === "en" ? "Year_ " : "Año_ "}
					</span>
					{t(`${nameProject}.year`)}
				</h3>
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${2 * staggerStepMs}ms` }}
				>
					<span className="font-bold">
						{lenguage === "en" ? "Location_ " : "Ubicación_ "}
					</span>
					{t(`${nameProject}.location`)}
				</h3>
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${3 * staggerStepMs}ms` }}
				>
					<span className="font-bold">
						{lenguage === "en" ? "Team_ " : "Equipo_ "}
					</span>
					{t(`${nameProject}.team`)}
				</h3>
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${4 * staggerStepMs}ms` }}
				>
					<span className="font-bold">
						{lenguage === "en" ? "Type_ " : "Tipo de obra_ "}
					</span>
					{t(`${nameProject}.project_type`)}
				</h3>
				<h3
					className="animate-slide-in-left"
					style={{ animationDelay: `${5 * staggerStepMs}ms` }}
				>
					<span className="font-bold">
						{lenguage === "en" ? "Client_ " : "Comitente_ "}
					</span>
					{t(`${nameProject}.client`)}
				</h3>
			</div>
			{children}
			<div>
				{p.map((paragraph, idx) => (
					<p
						className="mb-6 animate-slide-in-left text-justify"
						key={idx}
						style={{ animationDelay: `${(h3Count + idx) * staggerStepMs}ms` }}
					>
						{paragraph}
					</p>
				))}
			</div>
		</div>
	);
}
