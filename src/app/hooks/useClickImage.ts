"use client";

import { useState } from "react";

export default function useClickImage() {
	const [isOpen, setIsOpen] = useState(false);
	const [src, setSrc] = useState("");
	const [alt, setAlt] = useState("");

	const handlerClick = (src: string, alt: string) => {
		setIsOpen(true);
		setSrc(src);
		setAlt(alt);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	return { isOpen, src, alt, handlerClick, onClose };
}
