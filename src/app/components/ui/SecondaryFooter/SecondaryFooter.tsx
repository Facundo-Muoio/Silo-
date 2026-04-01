import React from "react";

interface Props {
	lenguage: "es" | "en";
	className?: string;
}

export default function SecondaryFooter({ lenguage, className }: Props) {
	const date = new Date();
	const year = date.getFullYear();
	const copyText = lenguage === "en" ? "©SILOARQUITECTES" : "©SILOARQUITECTOS";
	return (
		<div
			className={`w-full flex justify-end px-10 py-5 text-lg ${className}`}
		>{`${year} ${copyText}`}</div>
	);
}
