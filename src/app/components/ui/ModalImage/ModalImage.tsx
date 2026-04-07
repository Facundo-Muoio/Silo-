"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	src: string;
	alt: string;
	className?: string;
}

export default function ModalImage({
	isOpen,
	onClose,
	src,
	alt,
	className,
}: Props) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (isOpen) {
			dialog.showModal();
			document.body.style.overflow = "hidden";
		}

		if (!isOpen) {
			dialog.close();
			document.body.style.overflow = "unset";
		}

		const handleClose = (event: Event) => {
			event.preventDefault();
			onClose();
		};

		dialog.addEventListener("cancel", handleClose);

		return () => {
			dialog.removeEventListener("cancel", handleClose);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	const handlerBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
		if (event.target === dialogRef.current) {
			onClose();
		}
	};

	return (
		<dialog
			ref={dialogRef}
			onClick={handlerBackdropClick}
			className="backdrop:bg-black/90 p-0 bg-transparent overflow-hidden outline-none w-[90vw] h-[90vh] max-w-none max-h-none shadow-none"
		>
			<div className="relative w-full h-full flex items-center justify-center">
				<Image
					src={src}
					alt={alt}
					fill
					sizes="90vw"
					className={`object-contain ${className}`}
				/>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white text-4xl z-10 hover:scale-110 transition-transform"
				>
					×
				</button>
			</div>
		</dialog>
	);
}
