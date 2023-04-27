import Link from "next/link"


const Header = () => {
  return (
    <div className="bg-white sticky shadow top-0 h-[14vh] flex justify-center items-center z-50 ">
        <div className="w-[90%] mx-auto flex justify-between items-center">
            <div>
                <img className="w-44 object-contain" src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/logo-dark.png" alt="Logo" />
            </div>

            <div className="hidden md:flex space-x-8 text-lg font-medium uppercase ">
                <Link href={'/home'} className="hover:text-primary">Home</Link>
                <Link href={'/menu'} className="hover:text-primary">Menu</Link>
                <Link href={'/shop'} className="hover:text-primary">Shop</Link>
                <Link href={'/contact'} className="hover:text-primary">Contact</Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
                <div className="flex space-x-2 items-center">
                    <div className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-300">
                    <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="text-lg font-medium">
                        <span>HOT LINE:</span>
                        <div className="text-xl font-bold text-primary tracking-wider">
                            +234 567 8910
                        </div>
                    </div>
                </div>

                <div className="h-10 w-10 flex cursor-pointer justify-center items-center rounded-full bg-gray-300">
                <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>

            <div className="md:hidden">
                <i className="fa-solid fa-bars"></i>
                <i className="fa-solid fa-x hidden"></i>
            </div>

        </div>
    </div>
  )
}

export default Header