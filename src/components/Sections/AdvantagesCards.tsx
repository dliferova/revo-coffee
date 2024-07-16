import mockCardsData, { mockCardData } from "../../mock/mockCardsData.ts"
import cardIcon1, { size as sizeA } from "../../assets/icons/1.svg"

const AdvantagesCards = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-2 mb-16">
        <p className="text-xl font-semibold text-center">
          Your Personalized Coffee
        </p>
        <h2 className="font-montserrat font-black text-3xl text-center">
          Coffee build your base
        </h2>
      </div>
      <ul className="flex flex-row flex-wrap gap-x-12">
        {mockCardsData.map((item: mockCardData) => (
          <li className="w-full max-w-[14.125rem] ms-auto me-auto mb-16 xl:mb-0">
            <svg {...sizeA} aria-hidden className="mb-10 ms-auto me-auto">
              <use xlinkHref={`#${cardIcon1}`} />
            </svg>
            <p className="text-2xl font-bold mb-2 text-center">{item.title}</p>
            <p className="text-center font-light text-dark-grey">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AdvantagesCards
