"use client";
import { useState, useContext } from "react";
import { createContext } from "react";
import { useMounted } from "@/src/app/hooks/useMounted";
import Image from "next/image";

interface Props {
	children: React.ReactNode;
	className?: string;
}

interface PropsItem {
	name: string;
	textContent: string;
	src: string;
	alt: string;
	delay: string;
}

interface Context {
	activeItem: string | null;
	toggleItem: (name: string) => void;
}

const AccordionContext = createContext<null | Context>(null);

export default function Accordion({ children, className }: Props) {
	const [activeItem, setActiveItem] = useState<string | null>(null);

	const toggleItem = (name: string) => {
		setActiveItem(prev => (prev === name ? null : name));
	};

	return (
		<AccordionContext.Provider value={{ activeItem, toggleItem }}>
			<div className={`group ${className}`}>{children}</div>
		</AccordionContext.Provider>
	);
}

function Item({ alt, name, src, textContent, delay }: PropsItem) {
	const { activeItem, toggleItem } = useContext(AccordionContext) as Context;
	const isOpen = activeItem === name;
	const mounted = useMounted();
	const entranceAnimation = mounted ? "animate-slide-in-right" : "opacity-0";
	const paragraphs = textContent.split("\n");

	return (
		<>
			<div
				onClick={() => toggleItem(name)}
				className={`flex items-center justify-between cursor-pointer py-2 
          font-bold text-xl transition-all duration-150 group-hover:text-gray-400 hover:text-black 
          ${isOpen ? "!text-black" : ""} ${entranceAnimation}`}
				style={{ animationDelay: delay }}
			>
				{name}
			</div>

			<div
				className={`grid transition-all duration-500 ease-in-out ${
					isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
				}`}
			>
				<div className="overflow-hidden">
					<div className="flex flex-col flex-col-reverse sm:flex-row mt-4 sm:mt-0 gap-8 pb-4">
						<div className="content-details text-justify flex flex-col justify-between gap-4 w-full sm:w-[45%] max-w-[480px] max-sm:self-center">
							{paragraphs.map((p, i) => (
								<p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
							))}
						</div>

						<div className="relative max-sm:mx-auto aspect-[3/4] w-full sm:w-[45%] max-w-[400px] overflow-hidden">
							<Image
								fill
								src={src}
								alt={alt}
								className="object-cover"
								sizes="(max-width: 640px) 100vw, 400px"
								priority={name === "Primer Item"}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Accordion.Item = Item;
