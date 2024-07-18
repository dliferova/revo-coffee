import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Grid, Pagination } from "swiper/modules"
import ProductCard from "../Ui/ProductCard.tsx"

const ProductsCardSlider = () => {
  const swiper = useSwiper()

  return (
    <section className="linear-gradient">
      <div className="container--lg">
        <div className="flex flex-col gap-y-2 mb-16">
          <p className="text-xl font-semibold text-center">
            Choose Your Favorite
          </p>
          <h2 className="font-montserrat font-black text-3xl text-center">
            CHUẨN GU ĐÚNG VỊ
          </h2>
        </div>
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default ProductsCardSlider
