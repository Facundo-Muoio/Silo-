import Image from "next/image";

export default function HeroLogo() {
	return (
		<div className="w-[350px] h-[90dvh] mx-auto flex items-center">
			{" "}
			<Image
				src="/images/Logo.webp"
				alt="Logo Silo"
				width={350}
				height={350}
				className="object-contain"
			/>
		</div>
	);
}
