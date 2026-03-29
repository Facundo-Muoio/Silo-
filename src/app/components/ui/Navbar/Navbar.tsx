"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import { useState } from "react";

type TNavBar = { children: ReactElement };

export default function Navbar({ children }: TNavBar) {
	const logo = useTranslations("Logo");
	const text = useTranslations("Navbar");
	const pathName = "/" + usePathname().split("/")[1];

	const isActive = (href: string) => pathName === href;

	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "architecture", href: "/architecture" },
		{ name: "visualization", href: "/visualization" },
		{ name: "atelier", href: "/atelier" },
		{ name: "contact", href: "/contact" },
	];

	const classNameLine =
		"w-full h-[2px] rounded-full bg-black transition-all duration-300 ease-in-out";

	return (
		<>
			<div className="navbar flex flex-row justify-between w-full p-10 items-center relative top-0 right-0 left-0">
				<h2 className="text-[22px]">{logo("title")}</h2>
				<ul className="hidden md:flex gap-4 xl:text-[18px]">
					{navLinks.map(({ name, href }) => (
						<Link
							key={name}
							href={href}
							className={isActive(href) ? "font-bold" : ""}
						>
							{text(`${name}`)}
						</Link>
					))}
					{children}
				</ul>
				<button
					className="w-[30px] h-[30px] p-1 md:hidden flex flex-col justify-around focus:outline-none focus:ring-1"
					onClick={() => setIsOpen(!isOpen)}
					aria-expanded={isOpen}
				>
					<span
						className={
							classNameLine + (isOpen ? " translate-y-[7.5px] rotate-45" : "")
						}
					/>
					<span className={classNameLine + (isOpen ? " opacity-0" : "")} />
					<span
						className={
							classNameLine + (isOpen ? " -translate-y-[7.5px] -rotate-45" : "")
						}
					/>
				</button>
			</div>
			<ul
				className={`w-full text-[20px] flex flex-col gap-4 p-6 absolute md:hidden overflow-hidden border-x-0 border-black bg-white z-10 ${
					isOpen
						? "h-[65dvh] opacity-100 border-y-1"
						: "h-0 opacity-0  border-y-0"
				}`}
				style={{
					transition: isOpen
						? "height 500ms ease-out, opacity 500ms ease-out, border-color 500ms ease-out, border-width 500ms ease-out"
						: "height 500ms ease-out 150ms, opacity 500ms ease-out 150ms, border-color 500ms ease-out 150ms, border-width 500ms ease-out 150ms",
				}}
			>
				{navLinks.map(({ name, href }, index) => (
					<Link
						key={name}
						href={href}
						className={`transition-all duration-500 ease-out ${
							isActive(href) ? "font-bold" : ""
						} ${
							isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
						}`}
						style={{
							transitionDelay: isOpen
								? `${index * 75}ms`
								: `${(navLinks.length - 1 - index) * 75}ms`,
						}}
					>
						{text(`${name}`)}
					</Link>
				))}
				<div
					className={`transition-all duration-500 ease-out ${
						isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
					}`}
					style={{
						transitionDelay: isOpen ? `${navLinks.length * 75}ms` : "0ms",
					}}
				>
					{children}
				</div>
			</ul>
		</>
	);
}
