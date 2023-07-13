
const ManageProduct = ({ product, index }) => {


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td><button onClick={() => window.manageProduct.showModal()} className="btn btn-secondary btn-xs">update</button></td>
            <td><button className="btn btn-warning btn-xs">delete</button></td>
        </tr>
    )
}

export default ManageProduct