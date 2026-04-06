import Link from "next/link";
import Image from "next/image";

interface Props {
	href: string;
	src: string;
	alt: string;
	name: string;
	year: string;
	client: string;
	className: string;
}

export default function Archive({
	href,
	src,
	alt,
	name,
	year,
	client,
	className,
}: Props) {
	return (
		<div className={`flex flex-col items-start text-sm ${className}`}>
			<Link href={href} className={"relative w-full h-[150px] lg:h-[200px]"}>
				<Image src={src} alt={alt} objectFit="cover" fill />
			</Link>
			<h3>{name}</h3>
			<h3>{year}</h3>
			<h3>{client}</h3>
		</div>
	);
}
