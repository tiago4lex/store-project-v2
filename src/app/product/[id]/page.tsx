import { products } from "@/core/store"

export default function ProductPage(props: any) {
    const id = +props.params.id
    const product = products.find(product => product.id === id)
    return product ? <div>{product?.description}</div> : <div>Product not found</div>
}