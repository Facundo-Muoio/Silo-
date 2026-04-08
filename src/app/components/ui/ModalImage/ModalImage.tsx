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
		} else {
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

	return (
		<dialog
			ref={dialogRef}
			className="backdrop:bg-black/95 p-0 bg-transparent overflow-auto outline-none w-screen h-screen max-w-none max-h-none border-none "
		>
			<button
				onClick={onClose}
				className="fixed max-sm:top-4 max-sm:right-4 landscape:max-lg:top-2 landscape:max-lg:right-2 top-8 right-8 z-[60] flex items-center justify-center w-12 h-12 text-white/50 hover:text-white transition-all hover:scale-110 cursor-pointer bg-transparent border-none outline-none focus:outline-none appearance-none"
				aria-label="Cerrar"
			>
				<IoCloseOutline size={50} strokeWidth={1} />
			</button>

			<div
				className="w-full h-full flex items-center justify-center p-6 md:p-10"
				onClick={onClose}
			>
				{src && (
					<div
						className="relative"
						style={{
							width: "min(90vw, 90vh * (16/9))",
							height: "min(90vh, 90vw * (9/16))",
							maxWidth: "90vw",
							maxHeight: "90vh",
						}}
						onClick={e => e.stopPropagation()}
					>
						<Image
							src={src}
							alt={alt}
							fill
							priority
							sizes="90vw"
							className={`object-contain pointer-events-auto ${className ?? ""}`}
						/>
					</div>
				)}
			</div>
		</dialog>
	);
}
