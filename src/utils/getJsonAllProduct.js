
const getJsonAllProduct = async () => {
    const req = await fetch('http://localhost:5000/products')
    return req.json()
}

export default getJsonAllProduct;