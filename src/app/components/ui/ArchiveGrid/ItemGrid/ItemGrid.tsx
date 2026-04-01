interface Props {
	basis: string;
}

export default function ItemGrid({ basis }: Props) {
	return (
		<div className={`item basis-${basis} h-[300px] bg-yellow-100`}>
			itemGrid
		</div>
	);
}
