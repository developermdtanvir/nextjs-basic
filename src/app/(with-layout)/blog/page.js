import loadBlogData from "@/utils/loadBlogData";
import Link from "next/link";
import './blog.scss';



const Blog = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    // const blog = await res.json();
    const blog = await loadBlogData();

    console.log(blog);

    return (
        <div className="wraper">
            {
                blog.map(item => <div key={item.id}>
                    <h1>{item.title}</h1>
                    <Link href={`/blog/${item.id}`}><button>{item.id}</button></Link>
                </div>)
            }
        </div>
    )
}

export default Blog;