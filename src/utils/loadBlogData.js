
const loadBlogData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json();
}

export default loadBlogData;