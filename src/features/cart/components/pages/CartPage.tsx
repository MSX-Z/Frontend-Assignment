import CartList from "@/features/cart/components/molecules/CartList";
import useCart from "@/features/cart/hooks/useCart";

function CartPage(){
  const { mainCart, fruitCart, vegetableCart, onSelectItem, onRemoveItem } =
    useCart();
  return (
    <div className="w-full grid grid-cols-3 gap-x-5 border p-10 overflow-hidden h-screen">
      <CartList data={mainCart} onClick={onSelectItem} />
      <div className="col-span-2 flex gap-x-2.5">
        <CartList className="[&_#list]:p-2.5 border" headerTitle="Fruit" data={fruitCart} onClick={onRemoveItem} />
        <CartList className="[&_#list]:p-2.5 border" headerTitle="Vegetable" data={vegetableCart} onClick={onRemoveItem} />
      </div>
    </div>
  );
};

export default CartPage;
