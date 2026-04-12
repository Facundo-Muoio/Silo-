"use client";

import { useState, useEffect, useCallback } from "react";
import { SliderProps } from "./Slider";

export function useSlider({
	slides,
	autoPlay = false,
	interval = 4000,
	pauseOnHover = true,
	loop = true,
	currentIndex,
	setCurrentIndex,
}: Omit<SliderProps, "className" | "showArrows" | "showDots">) {
	const [isPaused, setIsPaused] = useState(false);
	const total = slides.length;

	const goTo = useCallback(
		(index: number) => {
			setCurrentIndex(index);
		},
		[setCurrentIndex],
	);

	const next = useCallback(() => {
		if (!loop && currentIndex === total - 1) return;
		if (loop && currentIndex === total - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(prev => prev + 1);
		}
	}, [currentIndex, setCurrentIndex, loop, total]);

	const prev = useCallback(() => {
		if (!loop && currentIndex === 0) return;
		if (loop && currentIndex === 0) {
			setCurrentIndex(total - 1);
		} else {
			setCurrentIndex(prev => prev - 1);
		}
	}, [currentIndex, setCurrentIndex, loop, total]);

	const pause = () => pauseOnHover && setIsPaused(true);
	const resume = () => setIsPaused(false);

	useEffect(() => {
		if (!autoPlay || isPaused) return;
		const idTimer = setInterval(() => next(), interval);
		return () => clearInterval(idTimer);
	}, [autoPlay, interval, isPaused, next]);

	return {
		currentIndex,
		setCurrentIndex,
		total,
		next,
		prev,
		pause,
		resume,
		goTo,
	};
}
