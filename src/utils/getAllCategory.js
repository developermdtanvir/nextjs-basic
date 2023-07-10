
const getAllCategory = async () => {
    const req = await fetch('https://fakestoreapi.com/products', {
        next: {
            revalidate: 10
        }
    })
    return req.json()
}

export default getAllCategory