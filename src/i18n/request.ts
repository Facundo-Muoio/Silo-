import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
	const cookieStorage = await cookies();
	const locale = cookieStorage.get("silo_lenguage")?.value || "en";

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
