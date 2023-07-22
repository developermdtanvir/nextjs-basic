import useProduct from "@/hooks/useProduct";

const AllProduct = () => {
    const { data, isLoading } = useProduct()
    console.log(data);


    return (
        <div>AllProduct</div>
    )
}

export default AllProduct