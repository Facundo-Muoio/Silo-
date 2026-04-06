interface Props {
	children: React.ReactNode;
}

export default function RowArchive({ children }: Props) {
	return (
		<div className="row w-full px-10 py-4 flex flex-wrap gap-1 lg:gap-4">
			{children}
		</div>
	);
}
