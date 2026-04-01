"use client";
import { useContext, createContext, useState } from "react";
import { useLenguage } from "./LenguageProvider";

export interface VisualizationContextType {
	state: string;
	setState: React.Dispatch<React.SetStateAction<string>>;
}

const VisualizationContext = createContext<
	VisualizationContextType | undefined
>(undefined);

export default function VisualizationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentLenguage = useLenguage();
	const [state, setState] = useState(
		currentLenguage === "en" ? "Selected" : "Seleccionados",
	);

	return (
		<VisualizationContext.Provider value={{ state, setState }}>
			{children}
		</VisualizationContext.Provider>
	);
}

export const useVisualization = () => useContext(VisualizationContext);
