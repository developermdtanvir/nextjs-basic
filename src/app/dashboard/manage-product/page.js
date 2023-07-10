import getJsonAllProduct from "@/utils/getJsonAllProduct"
import ManageProduct from "./ManageProduct"

const Product = async () => {
    const products = await getJsonAllProduct()
    return (
        <div>
            <div>ManageProduct</div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Job</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <ManageProduct key={product.id} product={product} index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product