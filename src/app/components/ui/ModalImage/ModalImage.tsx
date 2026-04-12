"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Image {
	id: number;
	src: string;
	alt: string;
}
interface Props {
	images: Image[];
	isOpen: boolean;
	onClose: () => void;
	currentIndex: number;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	className?: string;
}
export default function ModalImage({
	className,
	images,
	isOpen,
	onClose,
	currentIndex,
	setCurrentIndex,
}: Props) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const currentImage = images[currentIndex];
	const disabledPrevButton = currentIndex === 0 ? true : false;
	const disabledNextButton = currentIndex === images.length - 1 ? true : false;

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

	const handlerPrev = () => {
		if (currentIndex === 0) return;
		setCurrentIndex(prev => prev - 1);
	};

	const handlerNext = () => {
		if (currentIndex === images.length - 1) return;
		setCurrentIndex(prev => prev + 1);
	};

	if (!currentImage) return null;

	return (
		<dialog
			ref={dialogRef}
			className="backdrop:bg-black/95 p-0 bg-transparent overflow-auto outline-none w-screen h-screen max-w-none max-h-none border-none outline-none focus:outline-none outline-none select-none"
		>
			<button
				onClick={onClose}
				className="fixed max-sm:top-4 max-sm:right-4 landscape:max-lg:top-2 landscape:max-lg:right-2 top-8 right-8 z-[60] flex items-center justify-center w-12 h-12 text-white/50 hover:text-white transition-all hover:scale-110 cursor-pointer bg-transparent border-none outline-none focus:outline-none appearance-none"
				aria-label="Cerrar"
			>
				<IoCloseOutline size={50} strokeWidth={1} />
			</button>

			<div className="relative w-full h-full flex items-center justify-center p-6 md:p-10 outline-none">
				<button
					className="cursor-pointer text-white/50 hover:text-white outline-none focus:outline-none trasition-all ease-in-out flex items-center justify-center p-1 disabled:text-white/50"
					onClick={handlerPrev}
					disabled={disabledPrevButton}
				>
					<IoIosArrowBack size={50} />
				</button>
				{images[currentIndex].src && (
					<div
						className="relative focus:outline-none"
						style={{
							width: "min(90vw, 90vh * (16/9))",
							height: "min(90vh, 90vw * (9/16))",
							maxWidth: "90vw",
							maxHeight: "90vh",
						}}
						onClick={e => e.stopPropagation()}
					>
						<Image
							src={images[currentIndex].src}
							alt={images[currentIndex].alt}
							fill
							priority
							sizes="90vw"
							className={`object-contain pointer-events-auto focus:outline-none${className ?? ""}`}
						/>
					</div>
				)}

				<button
					className="cursor-pointer text-white/50 hover:text-white outline-none focus:outline-none trasition-all ease-in-out flex items-center justify-center p-1 disabled:text-white/50"
					onClick={handlerNext}
					disabled={disabledNextButton}
				>
					<IoIosArrowForward size={50} />
				</button>
			</div>
		</dialog>
	);
}
