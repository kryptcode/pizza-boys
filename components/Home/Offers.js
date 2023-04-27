

const meals = [
    {
        id: 1,
        name: 'BBQ Pizza TinTin',
        price: '$18.00',
        img: 'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_06-400x400.png',
        slug: 'bb-pizza-tintin'
    },
    {
        id: 2,
        name: 'Burger Kang',
        price: '$18.50',
        img: 'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_016-400x400.png',
        slug: 'burger-kang'
    },
    {
        id: 3,
        name: 'Cheesy Pizza',
        price: '$22.00',
        img: 'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_01-400x400.png',
        slug: 'cheesy-pizza'
    },
    {
        id: 4,
        name: 'Burger Bros',
        price: '$28.00',
        img: 'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_08-400x400.png',
        slug: 'burger-bros'
    },
    {
        id: 5,
        name: 'Coca Cola',
        price: '$2.00',
        img: 'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_014-400x400.png',
        slug: 'coke'
    },
    {
        id: 6,
        name: 'Chicken Sammich',
        price: '$18.00',
        img: 'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_010-400x400.png',
        slug: 'chicken-sam'
    },
]

const Offers = () => {
  return (
    <div className="bg-white py-16">
        <div className="w-[90%] mx-auto ">
            <div className="text-center">
                <h6 className="text-primary text-xl font-semibold mb-3">FRESH FROM PIZZABROS</h6>
                <h2 className="text-4xl font-bold tracking-wider">Our Popular Dishes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    meals.map((meal) => (
                        <div className="group cursor-pointer relative bg-yell/20 p-4 pb-10 shadow-xl mt-10 rounded-xl">
                            <div className="relative flex justify-center items-center">
                                <img src={meal.img} alt="" className="z-10 w-64" />
                                <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape28.png' className="absolute hidden group-hover:flex duration-500 ease-linear transition-all w-24 top-2 right-12 animate__animated animate__fadeIn" alt="" />
                                <img src='https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape36.png' className="absolute hidden group-hover:flex duration-500 ease-linear transition-all w-24 bottom-2 left-12 animate__animated animate__fadeIn" alt="" />
                            </div>
                            <div className="my-6 text-center">
                                <h5 className="text-primary text-2xl font-semibold">{meal.price}</h5>
                                <h3 className="font-bold text-3xl tracking-wider">{meal.name}</h3>
                            </div>
                            <div className="hidden  group-hover:flex animate__animated  animate__fadeInDown mx-auto absolute -bottom-7 left-28 cursor-pointer hover:bg-yell w-40 justify-center py-3 rounded-3xl text-white font-medium bg-primary space-x-3 items-center">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>
                                    VIEW OPTIONS
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Offers