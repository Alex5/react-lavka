import { getCategory } from "@/lib/api/category";
import styles from "./catalog-sidebar.module.css";

export async function CatalogSidebar() {
	const { category } = await getCategory();

	return (
		<aside className={styles["catalog-sidebar"]}>
			<ul>
				{category?.categories.map((categoryItem) => {
					return <li key={categoryItem.id}>{categoryItem.value.title}</li>;
				})}
			</ul>
		</aside>
	);
}
