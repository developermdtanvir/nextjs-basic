import loadSingleBlogData from "@/utils/loadSingleBlogData";

export const generateMetadata = ({ params }) => {
    const data = loadSingleBlogData(params.id);
    console.log(data)
    return {
        title: data.title
    }
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