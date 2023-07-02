import NavLink from "./NavLink"

const navlink = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/about',
        name: 'About'
    },
    {
        path: '/blog',
        name: 'Blog'
    },
    {
        path: '/dashboard',
        name: 'Dashboard'
    },
]


const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>
                <h1>Next Hero</h1>
            </div>
            <div>
                <ul className="flex">
                    {
                        navlink.map((links, index) => <li className="ml-5" key={index}><NavLink exact={links.path === '/'} activeClassname="text-blue-600" href={links.path} >{links.name}</NavLink></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar