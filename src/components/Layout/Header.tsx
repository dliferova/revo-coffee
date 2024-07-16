import logoIcon, { size as sizeA } from "../../assets/icons/logo.svg"
import cartIcon, { size as sizeB } from "../../assets/icons/cart.svg"

const Header = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col justify-between">
        <svg {...sizeA} aria-hidden>
          <use xlinkHref={`#${logoIcon}`} />
        </svg>
        <h1 className="font-montserrat text-4xl uppercase font-black flex flex-col">
          <span>Your</span>
          <span>personalized</span>
          <span>coffee</span>
        </h1>
      </div>
      <div className="flex flex-col bg-primary-color text-white gap-y-28">
        <div>
          <svg {...sizeB} aria-hidden>
            <use xlinkHref={`#${cartIcon}`} />
          </svg>
        </div>
        <div className="flex flex-col items-start gap-y-8">
          <p className="font-bold">TRANG CHỦ</p>
          <nav className="flex flex-col gap-y-8 text-uppercase">
            <a href="/public">COFFEE</a>
            <a href="/public">PHIN MẠ MÀU</a>
            <a href="/public">COMBO PHIN PHÊ</a>
            <a href="/public">GIFTSET</a>
            <a href="/public">LIÊN HỆ</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
