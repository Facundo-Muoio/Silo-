interface Props {
	children: React.ReactNode;
}

export default function GroupButtons({ children }: Props) {
	return (
		<div className="flex flex-row gap-4 justify-end w-[80vw] max-w-[1300px] mx-auto">
			{children}
		</div>
	);
}
