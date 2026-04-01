"use client";
import { useMessages } from "next-intl";
import { useLenguage } from "@/src/app/contexts/LenguageProvider";

interface Props {
	id: number;
}

export default function SelectedInfo({ id }: Props) {
	const messages = useMessages();
	const item = messages.Visualization.selected.slice(id - 1, id)[0];
	const currentLenguage = useLenguage();
	const project = currentLenguage === "en" ? "Project" : "Proyecto";
	const year = currentLenguage === "en" ? "Year" : "Año";
	const client = currentLenguage === "en" ? "Client" : "Cliente";
	const staggerStepMs = 200;

	return (
		<div className="flex flex-col items-start justify-center  gap-4 max-w-[425px]">
			<h3
				className="animate-slide-in-left"
				style={{ animationDelay: `${0 * staggerStepMs}ms` }}
			>
				<span className="font-bold">{project}_ </span>
				{item.name}
			</h3>
			<h3
				className="animate-slide-in-left"
				style={{ animationDelay: `${1 * staggerStepMs}ms` }}
			>
				<span className="font-bold">{year}_ </span>
				{item.year}
			</h3>
			<h3
				className="animate-slide-in-left"
				style={{ animationDelay: `${2 * staggerStepMs}ms` }}
			>
				<span className="font-bold">{client}_ </span>
				{item.client}
			</h3>
		</div>
	);
}
