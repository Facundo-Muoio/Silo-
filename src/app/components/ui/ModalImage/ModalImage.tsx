"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
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
			className="backdrop:bg-black/90 p-0 bg-transparent overflow-hidden focus:outline-none outline-none w-[90vw] h-[90vh] max-w-none max-h-none shadow-none mt-[2.5vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		>
			<div className="relative w-full h-full flex items-center justify-center">
				{src && (
					<Image
						src={src}
						alt={alt}
						fill
						sizes="95vw"
						className={`object-contain ${className}`}
					/>
				)}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all hover:scale-110 cursor-pointer bg-transparent border-none outline-none focus:outline-none appearance-none"
					aria-label="Cerrar"
				>
					<IoCloseOutline size={40} strokeWidth={1.5} />
				</button>
			</div>
		</dialog>
	);
}
