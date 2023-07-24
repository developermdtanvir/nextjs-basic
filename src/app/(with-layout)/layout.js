import Navbar from "@/components/Navbar"

const WithLayout = ({ children }) => {
    return (
       <div className="background_image bg-[#0E1729]">
         <div className="container mx-auto">
            <Navbar />
            {children}
            <p>Footer</p>
        </div>
       </div>
    )
}

export default WithLayout