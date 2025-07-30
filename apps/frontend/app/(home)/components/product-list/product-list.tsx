import {Grid} from "@/shared/ui/grid/grid";
import {ProductCard} from "../product-card/product-card";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";
import { ProductTile } from "@/shared/api/hooks/use-category/use-category.types";

type ProductListProps = {
    productTile?: ProductTile
    cart?: CartType
}

export function ProductList({productTile}: ProductListProps) {
    const products = productTile?.items?.map((productItem) => {
        return {
            id: productItem.value.id,
            currentPrice: productItem.value.pricing.price,
            longTitle: productItem.value.longTitle,
            // @todo fix this
            currentPriceSigned: productItem.value.pricing.price + "₽",
            snippetImage: productItem.value.snippetImage,
        }
    })

    return (
        <Grid>
            {products?.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </Grid>
    );
}
