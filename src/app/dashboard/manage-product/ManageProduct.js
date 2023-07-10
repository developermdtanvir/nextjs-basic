
const ManageProduct = ({ product, index }) => {
    console.log(product)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td><button className="btn btn-secondary btn-xs">update</button></td>
            <td><button className="btn btn-warning btn-xs">delete</button></td>
        </tr>
    )
}

export default ManageProduct