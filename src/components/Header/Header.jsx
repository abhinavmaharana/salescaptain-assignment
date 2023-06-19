

function Header() {
  return (
    <header className="bg-primary shadow-lg p-4">
        <nav className="flex justify-between items-center w-[80%] mx-auto">
            <div>
                <img className="w-48" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d6709cf8832cfd1775bf4e_salescaptainfull-p-500.png" alt="" />
            </div>
            <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Solutions</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resources</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Support</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <button className="outline outline-black text-black px-5 py-2 rounded-md">Sign in</button>
                <button className="bg-black text-primary px-5 py-2 rounded-md">Get started</button>
                <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
        </nav>
    </header>
  )
}

export default Header