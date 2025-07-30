import {CatalogSidebar} from "@home/components/catalog-sidebar/catalog-sidebar";
import {CategoryList} from "@home/components/category-list/category-list";
import { CartSidebar } from "./components/cart-sidebar/cart-sidebar";

export default async function RootPage() {
    return (
        <>
            <CatalogSidebar/>
            <CategoryList/>
            <CartSidebar/>
        </>
    )
}
