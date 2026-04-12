"use client";

import { useState, useCallback } from "react";

export default function useClickImage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const onClick = useCallback((index: number) => {
		setCurrentIndex(index);
		setIsOpen(true);
		console.log("hiciste click en open");
	}, []);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return {
		isOpen,
		onClick,
		onClose,
		currentIndex,
		setCurrentIndex,
	};
}
