import { ProductList } from "@home/components/product-list/product-list";
import { getCategory } from "@/lib/api/category";
import { Text } from "@/shared/ui/text/Text";

export async function CategoryList() {
	const { category } = await getCategory();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				width: "100%",
				gridArea: "main",
			}}
		>
			{category?.categories?.[0]?.items?.map((productTile) => {
				if (productTile.index === 0) return null;

				return (
					<div
						key={productTile.id}
						style={{ display: "flex", flexDirection: "column", gap: "20px" }}
					>
						<Text fontSize="title4" fontWeight="medium">
							{productTile.value.title}
						</Text>
						<ProductList productTile={productTile} />
					</div>
				);
			})}
		</div>
	);
}
