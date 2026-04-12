"use client";
import { createContext, useState, useContext } from "react";

interface Props {
	children: React.ReactNode;
	buttonTag: string;
	className?: string;
}

interface DropdownContext {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ItemProps {
	children: React.ReactNode;
	delay: string;
}

const DropDownContext = createContext<null | DropdownContext>(null);

export default function Dropdown({ children, buttonTag, className }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const animate = isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0";

	const handlerClick = () => setIsOpen(prev => !prev);

	return (
		<DropDownContext.Provider value={{ isOpen, setIsOpen }}>
			<button
				className={`border-none outline-none cursor-pointer ${className}`}
				onClick={handlerClick}
			>
				{buttonTag}
			</button>
			<ul
				className={`overflow-hidden transition-all ease-in-out duration-600 ${animate}`}
			>
				{children}
			</ul>
		</DropDownContext.Provider>
	);
}

export function DropdownItem({ children, delay }: ItemProps) {
	const { isOpen } = useContext(DropDownContext) as DropdownContext;
	const entranceAnimte = isOpen
		? "animate-slide-in-left"
		: "animate-slide-in-out";

	return (
		<li className={`${entranceAnimte}`} style={{ animationDelay: delay }}>
			{children}
		</li>
	);
}
