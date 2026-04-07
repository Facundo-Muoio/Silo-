"use client";
import {
	NavbarContextProvider,
	useNavbar,
} from "@/src/app/contexts/NavbarProvider";

interface Props {
	children: React.ReactNode;
}

export default function GroupButtons({ children }: Props) {
	const { isOpen } = useNavbar() as NavbarContextProvider;
	const zIndex = isOpen ? "z-0" : "z-100";
	const opacity = isOpen ? "opacity-0" : "opacity-100";

	return (
		<div
			className={`flex flex-row gap-2 md:gap-4 justify-end w-full px-6 md:px-10 max-w-[1300px] mx-auto relative ${zIndex} ${opacity}`}
			style={{ transition: "opacity 0s 0.4s ease-out" }}
		>
			{children}
		</div>
	);
}
