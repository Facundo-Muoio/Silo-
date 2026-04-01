"use client";
import Image from "next/image";
import { useTranslations, useMessages } from "next-intl";
import { useMounted } from "@/src/app/hooks/useMounted";

export default function Contact() {
	const t = useTranslations("Contact");
	const m = useMessages();
	const email = t("gmail");
	const linkedin = t("linkedin");
	const mounted = useMounted();
	const instagram = m.Contact.instagram;
	const behance = t("behance");
	const animate = mounted ? "animate-reveal" : "";

	return (
		<>
			<div
				className={`container_logo w-full px-10 pb-10 flex justify-center items-center  ${animate}`}
				style={{ animationDelay: "0.1s" }}
			>
				<Image
					src="/images/Logo.webp"
					width={300}
					height={300}
					sizes="300px"
					alt="logo de silo"
				/>
			</div>

			<div
				className={`container_email w-full p-10 flex justify-center text-lg  ${animate}`}
				style={{ animationDelay: "0.3s" }}
			>
				<a
					href={`mailto:${email.toLowerCase()}`}
					className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)] cursor-pointer"
				>
					{email}
				</a>
			</div>

			<div
				className={`container_social_medias flex justify-between items-end p-10 w-full fixed bottom-20  ${animate}`}
				style={{ animationDelay: "0.5s" }}
			>
				<div className="container_linkedin text-lg">
					<a
						className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)]"
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{linkedin}
					</a>
				</div>

				<div className="container_instagrams flex gap-8 text-lg">
					<a
						className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)]"
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{instagram[0]}
					</a>
					<a
						className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)]"
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{instagram[1]}
					</a>
				</div>

				<div className="container_behance text-lg">
					<a
						className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)]"
						href="https://www.behance.net/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{behance}
					</a>
				</div>
			</div>
		</>
	);
}
