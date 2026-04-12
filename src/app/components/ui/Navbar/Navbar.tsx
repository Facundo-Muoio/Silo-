"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import {
	NavbarContextProvider,
	useNavbar,
} from "@/src/app/contexts/NavbarProvider";

type TNavBar = { children: ReactElement };

export default function Navbar({ children }: TNavBar) {
	const logo = useTranslations("Logo");
	const text = useTranslations("Navbar");
	const pathName = "/" + usePathname().split("/")[1];

	const isActive = (href: string) => pathName === href;

	const { isOpen, setIsOpen } = useNavbar() as NavbarContextProvider;

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
			<div className="navbar flex flex-row justify-between w-full p-6 md:p-10 items-center relative top-0 right-0 left-0">
				<h2 className="text-[20px] sm:text-[22px] font-bold">
					<Link href={"/"}>{logo("title")}</Link>
				</h2>
				<ul className="group hidden lg:flex gap-4 lg:text-lg">
					{navLinks.map(({ name, href }) => (
						<Link
							key={name}
							href={href}
							className={`transition-all duration-300 hover:!text-black hover:font-bold group-hover:text-gray-400 ${isActive(href) ? "font-bold" : ""} `}
						>
							{text(`${name}`)}
						</Link>
					))}
					{children}
				</ul>
				<button
					className="w-[30px] h-[30px] p-1 lg:hidden flex flex-col justify-around focus:outline-none focus:ring-1"
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
				className={`group w-full text-[20px] flex flex-col gap-4 p-6 absolute lg:hidden overflow-hidden border-x-0 border-black bg-white z-10 ${
					isOpen
						? "h-[70lvh] min-h-fit opacity-100 border-y-1 pointer-events-auto"
						: "h-0 opacity-0 border-y-0 pointer-events-none"
				}`}
				style={{
					transition: isOpen
						? "height 1ms ease-out, opacity 500ms ease-out, border-color 500ms ease-out, border-width 500ms ease-out"
						: "height 500ms ease-out 150ms, opacity 500ms ease-out 150ms, border-color 500ms ease-out 150ms, border-width 500ms ease-out 150ms",
				}}
			>
				{navLinks.map(({ name, href }, index) => (
					<Link
						key={name}
						href={href}
						onClick={() => setIsOpen(false)}
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
