import Products from "@/components/Product"
import getAllProduct from "@/utils/getAllProduct"

const Product = async () => {
    const product = await getAllProduct()
    return (
        <div className="py-24 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    product.map(pd => <Products product={pd} />)
                }
            </div>
        </div>
    )
}

export default Product