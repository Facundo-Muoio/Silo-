"use client";
import Image from "next/image";
import { useSlider } from "./useSlider";
import { useMounted } from "@/src/app/hooks/useMounted";
import { useEffect, useCallback } from "react";

interface slideItem {
	id: number;
	src: string;
	alt: string;
	caption?: string;
	href?: string;
}

interface SliderProps {
	slides: slideItem[];
	autoPlay?: boolean;
	interval?: number;
	showArrows?: boolean;
	showDots?: boolean;
	pauseOnHover?: boolean;
	loop?: boolean;
	initialIndex?: number;
	className?: string;
	classNameContainer?: string;
	aspectRatio?: string;
	animationDelay?: string;
	onSlideChange?: (arg: string) => void;
	onClick?: (src: string, alt: string) => void;
	classNameImage?: string;
}

export default function Slider({
	slides,
	autoPlay = false,
	interval = 4000,
	showArrows = true,
	showDots = true,
	pauseOnHover = true,
	loop,
	initialIndex = 0,
	classNameContainer,
	className,
	classNameImage,
	aspectRatio,
	animationDelay = "500ms",
	onSlideChange,
	onClick,
}: SliderProps) {
	const { current, setCurrent, next, pause, prev, resume, total } = useSlider({
		slides,
		autoPlay,
		interval,
		pauseOnHover,
		loop,
		initialIndex,
		onSlideChange,
	});

	const mounted = useMounted();
	const animate = mounted ? "animate-fade-in-up" : "opacity-0";

	const handlerPrev = useCallback(() => {
		if (onSlideChange) {
			onSlideChange("prev");
		}
		prev();
	}, [onSlideChange, prev]);

	const handlerNext = useCallback(() => {
		if (onSlideChange) {
			onSlideChange("next");
		}
		next();
	}, [onSlideChange, next]);

	useEffect(() => {
		const handleKeyDown = (ev: KeyboardEvent) => {
			switch (ev.key) {
				case "ArrowLeft":
					if (current === 0) break;
					handlerPrev();
					break;
				case "ArrowRight":
					if (current === total - 1) break;
					handlerNext();
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handlerNext, handlerPrev, current, total]);

	return (
		<div
			className={`container-slider flex gap-12 justify-center items-center ${animate} ${
				classNameContainer ?? ""
			}`}
			style={{ animationDelay: `${animationDelay}` }}
		>
			<div className="relative flex items-center justify-center w-full gap-2 landscape:gap-6 sm:gap-6">
				{showArrows && (
					<button
						type="button"
						onClick={handlerPrev}
						aria-label="Previous Slide"
						disabled={current === 0}
						className="cursor-pointer disabled:cursor-auto"
					>
						<div
							className={`w-0 h-0 border-y-[8px] border-y-transparent border-r-[12px] ${
								current === 0 ? "border-r-gray-400" : "border-r-black"
							}`}
						></div>
					</button>
				)}

				<section
					className={`relative overflow-hidden ${className ?? ""}`}
					aria-label="Image Gallery"
					aria-roledescription="carrusel"
				>
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${current * 100}%)` }}
					>
						{slides.map((slide, index) => (
							<div
								key={slide.id}
								className={`wrapper relative min-w-full landscape:max-md:aspect-[16/9] aspect-[3/4] md:aspect-[4/3] ${
									aspectRatio && aspectRatio
								}`}
								aria-label={`Slide ${index + 1} de ${total}: ${slide.alt}`}
								aria-hidden={index == current}
							>
								<Image
									src={slide.src}
									alt={slide.alt}
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
									fill
									className={`object-cover cursor-pointer ${classNameImage}`}
									onMouseEnter={pause}
									onMouseLeave={resume}
									onClick={() => onClick && onClick(slide.src, slide.alt)}
									priority={initialIndex === 0}
								/>
								{slide.caption && (
									<p
										className="absolute bottom-4 left-4 right-4 bg-black/50 text-white text-sm px-3 py-1.5
                  rounded-lg backdrop-blur-sm"
									>
										{slide.caption}
									</p>
								)}
							</div>
						))}
					</div>

					{showDots && (
						<div
							role="tablist"
							aria-label="Slides"
							className="absolute bottom-3 left-0 right-0 flex justify-center gap-2"
						>
							{slides.map((slide, index) => (
								<button
									key={slide.id}
									role="tab"
									aria-selected={index === current}
									aria-label={`Go to slide ${index + 1}`}
									onClick={() => setCurrent(index)}
									className={`h-2 rounded-full transition-all ${
										index === current
											? "w-5 bg-white"
											: "w-2 bg-white/50 hover:bg-white/80"
									}`}
								></button>
							))}
						</div>
					)}
				</section>
				{showArrows && (
					<button
						type="button"
						onClick={handlerNext}
						aria-label="Next Slide"
						disabled={current === total - 1}
						className="cursor-pointer disabled:cursor-auto"
					>
						<div
							className={`w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] ${
								current === total - 1 ? "border-l-gray-400" : "border-l-black"
							}`}
						></div>
					</button>
				)}
			</div>
		</div>
	);
}

export type { slideItem, SliderProps };
