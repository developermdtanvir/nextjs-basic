"use client"
import Modal from "@/components/Modal";
import { useState } from "react";
import ManageProduct from "./ManageProduct";

const Products = async ({ products }) => {

    const [updateData, setUpdateData] = useState(null);


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <ManageProduct
                            key={product.id} product={product} index={index} />)
                    }
                </tbody>
            </table>
            <Modal />
        </div>
    )
}

export default Products