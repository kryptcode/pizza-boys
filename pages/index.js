import Header from '@/components/Header'
import Banner from '@/components/Home/Banner'
import Griddy from '@/components/Home/Griddy'
import Offers from '@/components/Home/Offers'
import Head from 'next/head'
import 'animate.css';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          PanBuddies | Home
        </title>
      </Head>

      <Header />
      <Banner />
      {/* <Griddy /> */}
      <Offers />

      {/* Banner ==> 2 */}
      <div className='bg-[url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/section_bg13.jpg")] bg-center bg-no-repeat bg-cover '>
        <div className='h-[50vh] md:h-[80vh] bg-[url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/excellent.png")] bg-contain bg-center w-[70%] mx-auto bg-no-repeat ' />
      </div>

      {/* Terms & Conds */}
      <div className='flex relative flex-col md:flex-row py-24 md:space-x-8 space-y-7 md:space-y-0'>
        <div className='bg-[url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/special-pro_1_bg.png")] relative flex-1 bg-contain bg-no-repeat bg-bottom '>
          <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/special-pro_1.png" alt="" />
          <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/special-pro_1_element.png" alt="" className='absolute top-28 w-36 md:w-48 md:top-44 -rotate-12  right-20 md:right-24' />
        </div>

        <div className='flex-1 text-center md:text-left'>
          <h6 className='text-primary text-xl font-bold mb-2'>WE PUT 100% OF LOVE AND DEDICATION</h6>
          <h3 className='text-3xl font-bold md:pr-48'>Panpie, Burgers, And Best Pizzas in Town</h3>
          <p className='font-medium mb-3 text-xl mt-3 md:pr-48'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, odio atque iste magnam placeat nostrum inventore exercitationem ad dolores rem quibusdam enim labore hic eum quam, incidunt facilis aspernatur quidem.
          </p>

          <div className='font-medium text-lg space-x-3 items-center justify-center md:justify-start flex mb-2'>
          <i className="fa-solid fa-circle-check text-primary"></i>
          <span>Additional charge for premium toppings</span>
          </div>
          <div className='font-medium text-lg space-x-3 items-center justify-center md:justify-start flex mb-2'>
          <i className="fa-solid fa-circle-check text-primary"></i>
          <span>Minimum of 2 required.</span>
          </div>
          <div className='font-medium text-lg space-x-3 items-center justify-center md:justify-start flex mb-2'>
          <i className="fa-solid fa-circle-check text-primary"></i>
          <span>Premium toppings are fixed</span>
          </div>
        </div>

        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape23.png" alt="" className='absolute bottom-0 right-0' />

      </div>

      {/* Slider */}
      <div className='bg-white py-16'>
        <div className='w-[90%] mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between md:space-x-5 '>
          <Link href={'/'} className='group flex-1 h-[50vh] overflow-hidden relative transition-all duration-500 ease-in-out'>
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/drinks.jpg" alt="" className='group-hover:scale-125 w-full h-full transition-all duration-500 ease-in-out' />
            <h3 className='absolute top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold'>Drinks</h3>
          </Link>

          <Link href={'/'} className='group flex-1 h-[50vh] overflow-hidden relative'>
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/pizza.jpg" alt="" className='group-hover:scale-125 w-full h-full transition-all duration-500 ease-in-out' />
            <h3 className='absolute top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold'>Pizza</h3>
          </Link>

          <Link href={'/'} className='group flex-1 h-[50vh] overflow-hidden relative'>
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/burger.jpg" alt="" className='group-hover:scale-125 w-full h-full transition-all duration-500 ease-in-out' />
            <h3 className='absolute top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold'>Burger</h3>
          </Link>
        </div>
      </div>

      {/* Menu */}

      {/* Banner ==> 3 */}
      <div className='h-[75vh] bg-[url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/video_bg_3.jpg")] bg-cover bg-center relative '>
        <div className='bg-black/50 h-full'>
          <div className='flex w-[80%] mx-auto md:w-full h-full justify-center items-center flex-col space-y-8'>
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/video_figure3.png" alt="" />
            <div className='text-xl md:text-3xl text-white flex space-x-5 items-center uppercase font-semibold font-roboto tracking-widest'>
              <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/shape27.png" alt="" />
              <h2>since 1950</h2>
              <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/shape27.png" alt="" />
            </div>
          </div>
        </div>
        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/shape28.png" alt="" className='absolute bottom-0 right-0 w-52' />
      </div>

      {/* Discount Banner */}
      <div className='pt-36 md:pt-24 relative'>
        <div className='w-[88%] mx-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 '>
          <div className='flex-1 relative'>
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/banner3-img_1.png" alt="" />
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/shape30.png" alt="" className='absolute -top-5 rotate-6 right-8 w-16' />
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/shape30.png" alt="" className='absolute -top-5 -rotate-[100deg] left-10 w-16' />
          </div>

          <div className='flex-[2] text-center text-gray-500 text-lg md:px-10 font-medium'>
            <h3 className='text-2xl md:text-3xl mb-4 bg-primary text-white font-bold py-3'>30% Discount Offer</h3>
            <p>
            If you’re having a meeting, working late at night and need an extra push.Let us know and we will be there
            </p>
          </div>

          <div className='flex-[1] '>
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/special_2.png" alt="" />
          </div>
        </div>

        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/shape31.png" alt="" className='absolute top-0 left-1/2 -translate-x-1/2' />
        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape36.png" alt="" className='absolute bottom-0 right-10' />
      </div>

    </div> 
  )
}
