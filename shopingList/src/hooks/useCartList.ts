import { useLocalStorage } from 'react-use';

import type { ProductItem } from '../types/ProductItem.ts';

export function useCartList() {
  const [cartList, setCartList] = useLocalStorage<ProductItem[]>('cart-list', []);
  return { cartList, setCartList };
}
