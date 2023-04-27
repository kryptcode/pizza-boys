import Header from '@/components/Header'
import Banner from '@/components/Home/Banner'
import Griddy from '@/components/Home/Griddy'
import Offers from '@/components/Home/Offers'
import Head from 'next/head'
import 'animate.css';

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
      <div className='bg-[url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/section_bg13.jpg")] bg-center bg-no-repeat bg-cover '>
        <div className='h-[50vh] md:h-[80vh] bg-[url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/excellent.png")] bg-contain bg-center w-[70%] mx-auto bg-no-repeat ' />
      </div>

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

    </div> 
  )
}
