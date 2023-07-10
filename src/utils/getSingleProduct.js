
const getSingleProduct = async (id) => {
    const req = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: 'no-cache'
    })
    return req.json()
}

export default getSingleProduct;