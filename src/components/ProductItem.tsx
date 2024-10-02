'use client';
import { Product } from "@/core/store";
import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";


export interface ProductItemProps {
  product: Product;
}
export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-black border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="h-48 w-full relative">
        <Image src={product.image} alt="Product Image" className="object-contain" fill />
      </div>

      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/10">
        <span className="text-lg font-semibold">{props.product.title}</span>
        <span className="text-sm border-b border-dashed  self-start">{product.expecifications.main}</span>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">from ${props.product.originalPrice}</span>
          <span className="text-xl font-semibold text-emerald-400">to ${props.product.discountedPrice}</span>
        </div>
        <button className="flex bg-red-500 rounded-full justify-center h-8 gap-2 items-center hover:border-2 border-white-400"
          onClick={(e: any) => {
            e.preventDefault();
            console.log("Add to cart");
          }}
        >
            
            <IconShoppingCartPlus size={20}/>
            <span>Add to cart</span>
        </button>
      </div>
    </Link>
  );
}
