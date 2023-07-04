
const loadSingleBlogData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        cache: 'force-cache'
    })
    return res.json();
}

export default loadSingleBlogData;