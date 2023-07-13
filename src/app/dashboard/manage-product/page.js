import getJsonAllProduct from "@/utils/getJsonAllProduct"
import Products from "./Products"

const Product = async () => {
    const products = await getJsonAllProduct()
    return (
        <div>
            <div>ManageProduct</div>
            <div>
                <Products products={products} />
            </div>
        </div>
    )
}

export default Product