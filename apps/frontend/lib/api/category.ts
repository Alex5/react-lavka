import { fetcher } from "@/lib/api/fetcher";

import type { CategoryData } from "@/shared/api/hooks/use-category/use-category.types";

export async function getCategory(): Promise<{
	category: CategoryData | undefined;
	error?: unknown;
}> {
	try {
		const res = await fetcher("category");

		return { category: await res.json(), error: undefined };
	} catch (e) {
		console.error(e);

		return { category: undefined, error: e };
	}
}
