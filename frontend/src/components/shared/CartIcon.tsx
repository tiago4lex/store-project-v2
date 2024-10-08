import { IconShoppingCart } from "@tabler/icons-react";

export interface CartIconProps {
  quantity: number;
}

export default function CartIcon(props: CartIconProps) {
  return (
    <div className="flex justify-center items-center rounded-full w-14 h-14 bg-black relative">
      <IconShoppingCart size={30} stroke={1.3} />
      <div className="absolute top-2 right-2 bg-red-700 text-white text-xs font-semibold rounded-full w-5 h-5 flex item-center justify-center">
        {props.quantity ?? 0}
      </div>
    </div>
  );
}
