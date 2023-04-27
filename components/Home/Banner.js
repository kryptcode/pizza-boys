
const Banner = () => {
  return (
    <div className="h-screen bg-none md:bg-[url('https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_09.png')] bg-white bg-contain bg-right-top bg md:bg-right bg-no-repeat flex justify-center items-center ">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-3 justify-between ">
            <div className="flex-1 pt-16 text-center md:text-left">
                <h3 className="uppercase text-xl md:text-5xl text-primary font-bold tracking-wider">big italian</h3>
                <h2 className="uppercase text-3xl md:text-7xl font-extrabold tracking-wider md:mt-4">CHEESE pIZZA</h2>
                <p className="text-lg font-medium my-4 md:my-6">
                    Additional Charge for premium toppings are fixed. <br /> Minimum of 2 required.
                </p>
                <div className="bg-yell text-white w-40 cursor-pointer text-center space-x-3 font-semibold rounded-3xl py-3 hover:bg-white mx-auto md:mx-0 hover:text-black transition-colors duration-500 ease-in-out">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>ORDER NOW</span>
                </div>
            </div>

            <div className="flex-[1.3] relative ">
                <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slide02-1.png" alt="" />
                <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_08.png" alt="" className="absolute hidden md:flex -top-[5rem] -rotate-6 right-0" />
                <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_06.png" alt="" className="absolute top-[1rem] left-56 w-16 rotate-90 " />
            </div>
        </div>
    </div>
  )
}

export default Banner