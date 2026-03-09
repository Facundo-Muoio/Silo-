type TyThumbnail = {
	src: string;
	name: string;
	year: number;
};

import Image from "next/image";

export default function Thumbnail({ src, name, year }: TyThumbnail) {
	return (
		<div className="thumbnail relative w-full aspect-square">
			<Image
				src={src}
				alt={name}
				fill
				className="object-contain transition-opacity duration-300 thumbnail-hover:opacity-30"
			/>
			<div className="absolute inset-0 flex items-center justify-center opacity-0 thumbnail-hover:opacity-100 transition-opacity duration-300">
				<span className="text-white font-medium">
					{name} {year}
				</span>
			</div>
		</div>
	);
}
