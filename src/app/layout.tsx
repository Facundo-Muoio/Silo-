import type { Metadata } from "next";
import { Space_Mono, JetBrains_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "./components/ui/Navbar/Navbar";
import LenguageButton from "./components/ui/LenguageButton/LenguageButton";
import { cookies } from "next/headers";
import { LenguageProvider } from "./contexts/LenguageProvider";
import NavbarProvider from "./contexts/NavbarProvider";

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	weight: ["400", "700"],
	subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
	variable: "--font-roboto-mono",
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Silo Architecture",
	description: "Architecture Studio",
	icons: {
		icon: "/android-chrome-192x192.png", // Puedes usar una ruta en /public,
		apple: "/apple-touch-icon.png",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const lenguage = cookieStore.get("silo_lenguage")?.value || "en";

	return (
		<html lang="en">
			<body className={`${spaceMono.className} antialiased `}>
				{
					<LenguageProvider value={lenguage}>
						<NextIntlClientProvider>
							<NavbarProvider>
								<Navbar>
									<LenguageButton />
								</Navbar>
								{children}
							</NavbarProvider>
						</NextIntlClientProvider>
					</LenguageProvider>
				}
			</body>
		</html>
	);
}
