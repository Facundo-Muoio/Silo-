interface Props {
	state: string;
}

export default function ArchiveGrid({ state }: Props) {
	return (
		<div className="grid grid-cols-12 gap-x-8 gap-y-16">
			{(state === "Archive" || state === "Archivos") && <></>}
		</div>
	);
}
