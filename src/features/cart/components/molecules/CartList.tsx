import { memo, type FC } from "react";
import type { CartItemData } from "@/features/cart/types/cart.type";
import { v4 as uuidV4 } from "uuid";
import { cn } from "@/utils/utils";

type CartListProps = {
  className?: string;
  headerTitle?: string;
  data: CartItemData[];
  onClick?: (item: CartItemData) => void;
};

const CartList: FC<CartListProps> = ({
  className,
  headerTitle,
  data,
  onClick,
}) => {
  return (
    <div className={cn("flex flex-col font-semibold w-full overflow-hidden", className)}>
      {headerTitle && <p className="bg-zinc-500/20 border-b text-center py-5">{headerTitle}</p>}
      <div id="list" className="flex flex-col overflow-y-auto gap-2.5">
        {data.map((e) => (
          <button
            key={uuidV4()}
            className="py-5 border hover:cursor-pointer"
            onClick={() => onClick?.(e)}
          >
            {e.name}
          </button>
        ))}
      </div>
    </div>
  );
};

CartList.displayName = "CartList";
export default memo(CartList);
