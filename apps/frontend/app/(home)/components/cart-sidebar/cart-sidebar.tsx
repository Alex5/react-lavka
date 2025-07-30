import { CartProductList } from "@home/components/cart-sidebar/components/cart-product-list/cart-product-list";
import { CheckoutCartButton } from "@home/components/cart-sidebar/components/checkout-cart-button/checkout-cart-button";
import { Text } from "@/shared/ui/text/Text";
import styles from "./cart-sidebar.module.css";

export function CartSidebar() {
	return (
		<aside className={styles["cart-sidebar"]}>
			<div className="flex flex-col gap-2">
				<Text fontSize="title4" fontWeight="bold">
					15–25 мин, 0–119 ₽
				</Text>
				<Text fontSize="caption1" fontColor="minor">
					Ещё 932₽, и будет 99₽
				</Text>
			</div>
			<CartProductList />
			<CheckoutCartButton />
		</aside>
	);
}
