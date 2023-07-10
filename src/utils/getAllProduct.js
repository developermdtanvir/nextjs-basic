
const getAllProduct = async () => {
    const req = await fetch('https://fakestoreapi.com/products')
    return req.json()
}

export default getAllProduct;