import Navbar from "@/components/Navbar"

const WithLayout = ({ children }) => {
    return (
        <div className="bg-[#0E1729] background_image">
            <div className="container mx-auto ">
            <Navbar />
            {children}
            <p>Footer</p>
            </div>
        </div>
    )
}

export default WithLayout