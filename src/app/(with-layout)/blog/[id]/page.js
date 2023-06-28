

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


const Blog = async ({ params }) => {

    const data = await getData(params.id);

    console.log(data);

    return (
        <>
            <div>This is Blog page</div>
            <p>{params.id}</p>
            <div>
                <p>user id : {data.id}</p>
                <p>Title : {data.title}</p>
            </div>
        </>
    )
}

export default Blog