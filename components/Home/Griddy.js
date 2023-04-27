import Link from "next/link"

const Griddy = () => {
  return (
    <div className="bg-white py-10">
        <div className="w-[90%] mx-auto">
          <Link href={'/pizza'}>
              <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/offer-pro_1.png" alt="" />
          </Link>
        </div>
    </div>
  )
}

export default Griddy

// const Griddy = () => {
//   return (
//     <div className="bg-white py-10">
//         <div className="w-[90%] mx-auto grid  md:grid-cols-3 gap-9 h-[200vh] md:h-[90vh] grid-rows-[8] md:grid-rows-3">
//             <Link href={'/pizza'} className="row-span-4  bg-[url('https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add01.jpg')] md:bg-cover rounded-2xl bg-no-repeat">
//             </Link>
//             <Link href={'/chicken'} className="md:col-span-1 row-span-2 bg-[url('https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add02.jpg')] bg-cover rounded-2xl bg-no-repeat"></Link>
//             <Link href={'/chicken'} className="md:col-span-1 row-span-2 bg-[url('https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add03.jpg')] bg-cover rounded-2xl bg-no-repeat"></Link>
//             <Link href={'/chicken'} className="md:col-span-2 row-span-1 bg-[url('https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add04.jpg')] bg-contain md:bg-cover rounded-2xl bg-no-repeat"></Link>
//             <p></p>
//         </div>
//     </div>
//   )
// }

// export default Griddy
