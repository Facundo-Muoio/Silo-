"use client";
import Image from "next/image";
import { useSlider } from "./useSlider";
import { useMounted } from "@/src/app/hooks/useMounted";

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
	onSlideChange?: (index: number) => void;
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
	className,
	onSlideChange,
}: SliderProps) {
	const { current, next, pause, prev, resume, total } = useSlider({
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

	return (
		<div
			className={`container-slider flex gap-12 justify-center items-center ${animate}`}
			style={{ animationDelay: "500ms" }}
		>
			{showArrows && (
				<button
					type="button"
					onClick={prev}
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
							className="wrapper relative min-w-full aspect-[4/3]"
							aria-label={`Slide ${index + 1} de ${total}: ${slide.alt}`}
							aria-hidden={index == current}
						>
							<Image
								src={slide.src}
								alt={slide.alt}
								fill
								className="object-cover"
								onMouseEnter={pause}
								onMouseLeave={resume}
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
								onClick={() => console.log("go to index")}
								className={`h-2 rounded-full transition-all ${index === current ? "w-5 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
							></button>
						))}
					</div>
				)}
			</section>

			{showArrows && (
				<button
					type="button"
					onClick={next}
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
	);
}

export type { slideItem, SliderProps };
