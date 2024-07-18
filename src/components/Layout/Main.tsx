import AdvantagesCards from "../Sections/AdvantagesCards.tsx"
import ProductsCardSlider from "../Sections/ProductsCardSlider.tsx"

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="pt-[5.375rem] pb-[8rem]">
          <AdvantagesCards />
        </div>
      </div>
      <div className="pt-[5.375rem] pb-[8rem]">
        <ProductsCardSlider />
      </div>
    </div>
  )
}

export default Main
