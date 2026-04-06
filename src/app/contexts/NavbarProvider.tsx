"use client";
import { useContext, createContext, useState } from "react";

export interface NavbarContextProvider {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextProvider | undefined>(
	undefined
);

export default function NavbarProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavbarContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</NavbarContext.Provider>
	);
}

export const useNavbar = () => useContext(NavbarContext);
