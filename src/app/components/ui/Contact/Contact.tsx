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
	const animate = mounted ? "animate-fade-slide-up" : "";

	const handleEmailClick = (e: React.MouseEvent) => {
		e.preventDefault();
		const clean = email.trim().toLowerCase();

		window.location.href = `mailto:${clean}`;

		setTimeout(() => {
			window.open(
				`https://mail.google.com/mail/?view=cm&to=${clean}`,
				"_blank",
			);
		}, 500);

		setTimeout(() => {
			window.open(
				`https://outlook.live.com/mail/0/deeplink/compose?to=${clean}`,
				"_blank",
			);
		}, 1000);
	};

	return (
		<div className="flex flex-col items-center justify-between mt-8 px-6 px-10 w-full min-h-[75dvh]">
			<div
				className={`min-w-[250px] max-w-[250px] aspect-square container_logo ${animate}`}
				style={{ animationDelay: "0.1s" }}
			>
				<Image src="/images/Logo.webp" fill sizes="300px" alt="logo de silo" />
			</div>

			<div
				className={`container_email w-full flex justify-center justify-self-center text-base md:text-lg landscape:max-lg:text-base ${animate}`}
				style={{ animationDelay: "0.3s" }}
			>
				<a
					className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)] cursor-pointer"
					onClick={handleEmailClick}
				>
					{email}
				</a>
			</div>

			<div
				className={`container_social_medias flex flex-wrap  justify-center md:flex-nowrap text-base md:text-lg landscape:max-lg:text-base md:justify-between items-end  w-full gap-4 lg:gap-8  ${animate}`}
				style={{ animationDelay: "0.5s" }}
			>
				<div className="container_linkedin">
					<a
						className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)]"
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{linkedin}
					</a>
				</div>

				<div className="container_instagrams flex gap-4 lg:gap-8">
					<a
						className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)]"
						href="https://www.instagram.com/silo.arq/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{instagram[0]}
					</a>
					<a
						className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)]"
						href="https://www.instagram.com/silo.viz/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{instagram[1]}
					</a>
				</div>

				<div className="container_behance">
					<a
						className="text-gray-600 transition-all duration-150 hover:text-black hover:[text-shadow:_0_0_1px_rgb(0_0_0)]"
						href="https://www.behance.net/siloarchviz"
						target="_blank"
						rel="noopener noreferrer"
					>
						{behance}
					</a>
				</div>
			</div>
		</div>
	);
}
