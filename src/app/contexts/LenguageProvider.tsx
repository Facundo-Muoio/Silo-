"use client";
import { createContext, useContext } from "react";

interface LenguageProviderProps {
	children: React.ReactNode;
	value: string;
}

const LenguageContext = createContext("en");

export function LenguageProvider({ children, value }: LenguageProviderProps) {
	return (
		<LenguageContext.Provider value={value}>
			{children}
		</LenguageContext.Provider>
	);
}

export const useLenguage = () => useContext(LenguageContext);
