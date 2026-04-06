import Selected from "@/src/app/components/ui/Selected/Selected";
import { cookies } from "next/headers";

interface Props {
	params: {
		id: 1 | 2 | 3 | 4 | 5 | 6 | 8;
	};
}

export default async function page({ params }: Props) {
	const cookieStore = await cookies();
	const lenguage = (cookieStore.get("silo_lenguage")?.value || "en") as
		| "en"
		| "es";
	const { id } = await params;
	console.log(id, typeof id);

	return <Selected id={id} lenguage={lenguage} />;
}
