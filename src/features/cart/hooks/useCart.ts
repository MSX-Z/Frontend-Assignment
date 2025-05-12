import { useCallback, useState } from "react"
import type { CartItemDate } from "@/features/cart/types/cart.type"
import { MAIN_CART } from "@/features/cart/constants/cart"
import { sleep } from "@/utils/utils"

const useCart = () => {
    const [mainCart, setMainCart] = useState<CartItemDate[]>(MAIN_CART)
    const [fruitCart, setFruitCart] = useState<CartItemDate[]>([])
    const [vegetableCart, setVegetableCart] = useState<CartItemDate[]>([])

    const addItemToCart = (item: CartItemDate) => (prev: CartItemDate[]) => prev.find(e => e.name === item.name) ? prev : [...prev, item]
    const removeItemFromCart = (item: CartItemDate) => (prev: CartItemDate[]) => prev.find(e => e.name === item.name) ? prev.filter(e => e.name !== item.name) : prev

    const onSelectItem = useCallback(async (item: CartItemDate) => {
        const setCart = item.type === 'Fruit' ? setFruitCart : setVegetableCart

        setCart(addItemToCart(item))
        setMainCart(removeItemFromCart(item))

        await sleep()

        setCart(removeItemFromCart(item))
        setMainCart(addItemToCart(item))

    }, [])

    const onRemoveItem = useCallback((item: CartItemDate) => {
        const setCart = item.type === 'Fruit' ? setFruitCart : setVegetableCart 

        setCart(removeItemFromCart(item))
        setMainCart(addItemToCart(item)) 
    }, [])

    return {
        mainCart,
        fruitCart,
        vegetableCart,
        onSelectItem,
        onRemoveItem
    }
}

export default useCart