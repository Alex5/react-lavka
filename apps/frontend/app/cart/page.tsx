import { Text } from "@/shared/ui/text/Text";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {CartProductList} from './components/cart-product-list/cart-product-list'

export default function CartPage() {
  return (
    <div className="flex flex-col gap-4 max-w-[960px] m-auto">
      <Link href="/">
        <div className="flex gap-1">
          <ArrowLeft />
          <Text>Вернуться в каталог</Text>
        </div>
      </Link>
      <Text fontSize="lg">Корзина</Text>
      <CartProductList/>
    </div>
  );
}
