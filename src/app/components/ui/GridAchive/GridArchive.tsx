import { useTranslations } from "next-intl";
import RowArchive from "./RowAchive/RowArchive";
import { archives_data } from "../../../../Projects_data/Achive";
import { useMounted } from "@/src/app/hooks/useMounted";
import Archive from "./RowAchive/Archive/Archive";

export default function GridArchive() {
	const t = useTranslations("Visualization");
	const archives = t.raw("archive");
	const href = "/visualization/archive/";
	const mounted = useMounted();
	const animate = mounted ? "animate-slide-in-left" : "opacity-0";

	return (
		<div className="overflow-x-auto">
			<RowArchive>
				<Archive
					className={`w-[calc(35%-4px)] lg:w-[calc(35%)] ${animate}`}
					style={{ animationDelay: `${0.15 + 0 * 0.08}s` }}
					alt={archives_data[0].alt}
					src={archives_data[0].src}
					href={href + archives_data[0].id}
					name={archives[0].name}
					year={archives[0].year}
					client={archives[0].client}
				/>
				<Archive
					className={`w-[calc(28%-4px)] lg:w-[calc(28%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 1 * 0.08}s` }}
					alt={archives_data[1].alt}
					src={archives_data[1].src}
					href={href + archives_data[1].id}
					name={archives[1].name}
					year={archives[1].year}
					client={archives[1].client}
				/>
				<Archive
					className={`w-[calc(15%-4px)] lg:w-[calc(15%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 2 * 0.08}s` }}
					alt={archives_data[2].alt}
					src={archives_data[2].src}
					href={href + archives_data[2].id}
					name={archives[2].name}
					year={archives[2].year}
					client={archives[2].client}
				/>
				<Archive
					className={`w-[calc(22%-4px)] lg:w-[calc(22%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 3 * 0.08}s` }}
					alt={archives_data[3].alt}
					src={archives_data[3].src}
					href={href + archives_data[3].id}
					name={archives[3].name}
					year={archives[3].year}
					client={archives[3].client}
				/>
			</RowArchive>

			<RowArchive>
				<Archive
					className={`w-[calc(25%-4px)] lg:w-[calc(25%)] ${animate}`}
					style={{ animationDelay: `${0.15 + 4 * 0.08}s` }}
					alt={archives_data[4].alt}
					src={archives_data[4].src}
					href={href + archives_data[4].id}
					name={archives[4].name}
					year={archives[4].year}
					client={archives[4].client}
				/>
				<Archive
					className={`w-[calc(15%-4px)] lg:w-[calc(15%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 5 * 0.08}s` }}
					alt={archives_data[5].alt}
					src={archives_data[5].src}
					href={href + archives_data[5].id}
					name={archives[5].name}
					year={archives[5].year}
					client={archives[5].client}
				/>
				<Archive
					className={`w-[calc(30%-4px)] lg:w-[calc(30%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 6 * 0.08}s` }}
					alt={archives_data[6].alt}
					src={archives_data[6].src}
					href={href + archives_data[6].id}
					name={archives[6].name}
					year={archives[6].year}
					client={archives[6].client}
				/>
				<Archive
					className={`w-[calc(30%-4px)] lg:w-[calc(30%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 7 * 0.08}s` }}
					alt={archives_data[7].alt}
					src={archives_data[7].src}
					href={href + archives_data[7].id}
					name={archives[7].name}
					year={archives[7].year}
					client={archives[7].client}
				/>
			</RowArchive>

			<RowArchive>
				<Archive
					className={`w-[calc(60%-4px)] lg:w-[calc(60%)] ${animate}`}
					style={{ animationDelay: `${0.15 + 8 * 0.08}s` }}
					alt={archives_data[8].alt}
					src={archives_data[8].src}
					href={href + archives_data[8].id}
					name={archives[8].name}
					year={archives[8].year}
					client={archives[8].client}
				/>
				<Archive
					className={`w-[calc(25%-4px)] lg:w-[calc(25%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 9 * 0.08}s` }}
					alt={archives_data[9].alt}
					src={archives_data[9].src}
					href={href + archives_data[9].id}
					name={archives[9].name}
					year={archives[9].year}
					client={archives[9].client}
				/>
				<Archive
					className={`w-[calc(15%-4px)] lg:w-[calc(15%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 10 * 0.08}s` }}
					alt={archives_data[10].alt}
					src={archives_data[10].src}
					href={href + archives_data[10].id}
					name={archives[10].name}
					year={archives[10].year}
					client={archives[10].client}
				/>
			</RowArchive>

			<RowArchive>
				<Archive
					className={`w-[calc(23.33%-4px)] lg:w-[calc(23.33%)] ${animate}`}
					style={{ animationDelay: `${0.15 + 11 * 0.08}s` }}
					alt={archives_data[11].alt}
					src={archives_data[11].src}
					href={href + archives_data[11].id}
					name={archives[11].name}
					year={archives[11].year}
					client={archives[11].client}
				/>
				<Archive
					className={`w-[calc(23.33%-4px)] lg:w-[calc(23.33%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 12 * 0.08}s` }}
					alt={archives_data[12].alt}
					src={archives_data[12].src}
					href={href + archives_data[12].id}
					name={archives[12].name}
					year={archives[12].year}
					client={archives[12].client}
				/>
				<Archive
					className={`w-[calc(30%-4px)] lg:w-[calc(30%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 13 * 0.08}s` }}
					alt={archives_data[13].alt}
					src={archives_data[13].src}
					href={href + archives_data[13].id}
					name={archives[13].name}
					year={archives[13].year}
					client={archives[13].client}
				/>
				<Archive
					className={`w-[calc(23.33%-4px)] lg:w-[calc(23.33%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 14 * 0.08}s` }}
					alt={archives_data[14].alt}
					src={archives_data[14].src}
					href={href + archives_data[14].id}
					name={archives[14].name}
					year={archives[14].year}
					client={archives[14].client}
				/>
			</RowArchive>

			<RowArchive>
				<Archive
					className={`w-[calc(25%-4px)] lg:w-[calc(25%)] ${animate}`}
					style={{ animationDelay: `${0.15 + 15 * 0.08}s` }}
					alt={archives_data[15].alt}
					src={archives_data[15].src}
					href={href + archives_data[15].id}
					name={archives[15].name}
					year={archives[15].year}
					client={archives[15].client}
				/>
				<Archive
					className={`w-[calc(30%-4px)] lg:w-[calc(30%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 16 * 0.08}s` }}
					alt={archives_data[16].alt}
					src={archives_data[16].src}
					href={href + archives_data[16].id}
					name={archives[16].name}
					year={archives[16].year}
					client={archives[16].client}
				/>
				<Archive
					className={`w-[calc(30%-4px)] lg:w-[calc(30%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 17 * 0.08}s` }}
					alt={archives_data[17].alt}
					src={archives_data[17].src}
					href={href + archives_data[17].id}
					name={archives[17].name}
					year={archives[17].year}
					client={archives[17].client}
				/>
				<Archive
					className={`w-[calc(15%-4px)] lg:w-[calc(15%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 18 * 0.08}s` }}
					alt={archives_data[18].alt}
					src={archives_data[18].src}
					href={href + archives_data[18].id}
					name={archives[18].name}
					year={archives[18].year}
					client={archives[18].client}
				/>
			</RowArchive>

			<RowArchive>
				<Archive
					className={`w-[calc(27%-4px)] lg:w-[calc(27%)] ${animate}`}
					style={{ animationDelay: `${0.15 + 19 * 0.08}s` }}
					alt={archives_data[19].alt}
					src={archives_data[19].src}
					href={href + archives_data[19].id}
					name={archives[19].name}
					year={archives[19].year}
					client={archives[19].client}
				/>
				<Archive
					className={`w-[calc(33%-4px)] lg:w-[calc(33%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 20 * 0.08}s` }}
					alt={archives_data[20].alt}
					src={archives_data[20].src}
					href={href + archives_data[20].id}
					name={archives[20].name}
					year={archives[20].year}
					client={archives[20].client}
				/>
				<Archive
					className={`w-[calc(20%-4px)] lg:w-[calc(20%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 21 * 0.08}s` }}
					alt={archives_data[21].alt}
					src={archives_data[21].src}
					href={href + archives_data[21].id}
					name={archives[21].name}
					year={archives[21].year}
					client={archives[21].client}
				/>
				<Archive
					className={`w-[calc(20%-4px)] lg:w-[calc(20%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 22 * 0.08}s` }}
					alt={archives_data[22].alt}
					src={archives_data[22].src}
					href={href + archives_data[22].id}
					name={archives[22].name}
					year={archives[22].year}
					client={archives[22].client}
				/>
			</RowArchive>

			<RowArchive>
				<Archive
					className={`w-[calc(30%-4px)] lg:w-[calc(30%)] ${animate}`}
					style={{ animationDelay: `${0.15 + 23 * 0.08}s` }}
					alt={archives_data[23].alt}
					src={archives_data[23].src}
					href={href + archives_data[23].id}
					name={archives[23].name}
					year={archives[23].year}
					client={archives[23].client}
				/>
				<Archive
					className={`w-[calc(18%-4px)] lg:w-[calc(18%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 24 * 0.08}s` }}
					alt={archives_data[24].alt}
					src={archives_data[24].src}
					href={href + archives_data[24].id}
					name={archives[24].name}
					year={archives[24].year}
					client={archives[24].client}
				/>
				<Archive
					className={`w-[calc(22%-4px)] lg:w-[calc(22%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 25 * 0.08}s` }}
					alt={archives_data[25].alt}
					src={archives_data[25].src}
					href={href + archives_data[25].id}
					name={archives[25].name}
					year={archives[25].year}
					client={archives[25].client}
				/>
				<Archive
					className={`w-[calc(30%-4px)] lg:w-[calc(30%-16px)] ${animate}`}
					style={{ animationDelay: `${0.15 + 26 * 0.08}s` }}
					alt={archives_data[26].alt}
					src={archives_data[26].src}
					href={href + archives_data[26].id}
					name={archives[26].name}
					year={archives[26].year}
					client={archives[26].client}
				/>
			</RowArchive>
		</div>
	);
}
