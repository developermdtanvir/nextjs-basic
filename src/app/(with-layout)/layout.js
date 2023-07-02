import Navbar from "@/components/Navbar"

const WithLayout = ({ children }) => {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
            <p>Footer</p>
        </div>
    )
}

export default WithLayout