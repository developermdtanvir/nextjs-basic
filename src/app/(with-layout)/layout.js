
const WithLayout = ({ children }) => {
    return (
        <div>
            <p>Navbar</p>
            {children}
            <p>Footer</p>
        </div>
    )
}

export default WithLayout