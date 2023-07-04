import loadBlogData from "@/utils/loadBlogData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);

    return {
        title: title
    }
}

export const generateStaticParams = async () => {
    const blogs = await loadBlogData()

    return blogs.map(({ id }) => ({
        id: id.toString()
    }))
}

const Blog = async ({ params }) => {



    const id = params.id;

    const blog = loadSingleBlogData(id)
    console.log(blog);


    return (
        <div>
            <h1>This is Single Blog page {params.id}</h1>
            <p>{blog.title}</p>
        </div>
    )
}

export default Blog