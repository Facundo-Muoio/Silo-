interface Props {
	children: React.ReactNode;
}

export default function RowArchive({ children }: Props) {
	return (
		<div className="w-full overflow-x-auto scrollbar-hide py-4">
			<div className="flex flex-nowrap gap-1 lg:gap-4 landscape:max-lg:min-w-max">
				{children}
			</div>
		</div>
	);
}
