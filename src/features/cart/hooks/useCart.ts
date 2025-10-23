import { useCallback, useState, useRef, useEffect } from "react";
import type { CartItemData } from "@/features/cart/types/cart.type";
import { MAIN_CART } from "@/features/cart/constants/cart";
import { sleep } from "@/utils/utils";

const useCart = () => {
    const [mainCart, setMainCart] = useState<CartItemData[]>(MAIN_CART);
    const [fruitCart, setFruitCart] = useState<CartItemData[]>([]);
    const [vegetableCart, setVegetableCart] = useState<CartItemData[]>([]);

    const timeoutsRef = useRef<Map<string, () => void>>(new Map());

    useEffect(() => {
        return () => {
            timeoutsRef.current.forEach((cancel) => cancel());
            timeoutsRef.current.clear();
        };
    }, []);

    const addItemToCart =
        (item: CartItemData) => (prev: CartItemData[]) =>
            prev.find((e) => e.name === item.name) ? prev : [...prev, item];

    const removeItemFromCart =
        (item: CartItemData) => (prev: CartItemData[]) =>
            prev.filter((e) => e.name !== item.name);

    const onSelectItem = useCallback((item: CartItemData) => {
        const setCart = item.type === "Fruit" ? setFruitCart : setVegetableCart;

        setCart(addItemToCart(item));
        setMainCart(removeItemFromCart(item));

        const { promise, cancel } = sleep(5000);
        timeoutsRef.current.set(item.name, cancel);

        promise.then(() => {
            if (!timeoutsRef.current.has(item.name)) return;

            setCart(removeItemFromCart(item));
            setMainCart(addItemToCart(item));

            timeoutsRef.current.delete(item.name);
        });
    }, []);


    const onRemoveItem = useCallback((item: CartItemData) => {
        const setCart = item.type === "Fruit" ? setFruitCart : setVegetableCart;

        const cancel = timeoutsRef.current.get(item.name);
        if (cancel) {
            cancel();
            timeoutsRef.current.delete(item.name);
        }

        setCart(removeItemFromCart(item));
        setMainCart(addItemToCart(item));
    }, []);

    return {
        mainCart,
        fruitCart,
        vegetableCart,
        onSelectItem,
        onRemoveItem,
    };
};

export default useCart;
