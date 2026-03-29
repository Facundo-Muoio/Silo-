"use client";

import { useState, useEffect, useCallback } from "react";
import { SliderProps } from "./Slider";

export function useSlider({
	slides,
	autoPlay = false,
	interval = 4000,
	pauseOnHover = true,
	loop = true,
	initialIndex = 0,
	onSlideChange,
}: Omit<SliderProps, "className" | "showArrows" | "showDots">) {
	const [current, setCurrent] = useState(initialIndex);
	const [isPaused, setIsPaused] = useState(false);
	const total = slides.length;

	const goTo = useCallback((index: number) => {
		setCurrent(index);
	}, []);

	const next = useCallback(() => {
		if (!loop && current === total - 1) return;
		if (loop && current === total - 1) {
			setCurrent(0);
		} else {
			setCurrent(prev => prev + 1);
		}
	}, [current, loop, total]);

	const prev = useCallback(() => {
		if (!loop && current === 0) return;
		if (loop && current === 0) {
			setCurrent(total - 1);
		} else {
			setCurrent(prev => prev - 1);
		}
	}, [current, loop, total]);

	const pause = () => pauseOnHover && setIsPaused(true);
	const resume = () => setIsPaused(false);

	useEffect(() => {
		if (!autoPlay || isPaused) return;
		const idTimer = setInterval(() => next(), interval);
		return () => clearInterval(idTimer);
	}, [autoPlay, interval, isPaused, next]);

	return {
		current,
		total,
		next,
		prev,
		pause,
		resume,
		goTo,
	};
}
