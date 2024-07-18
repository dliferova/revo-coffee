const ProductCard = () => {
  return (
    <div className="flex flex-row xl:max-w-[34.313rem]">
      <div
        style={{ width: "236px", height: "256px", backgroundColor: "#EDF0F5" }}
      >
        {/*<img src={""} width="236" height="256" alt="Product Image" />*/}
      </div>
      <div className="flex flex-col bg-white p-6">
        <div className="mb-5">
          <strong className="text-xl text-accent-color mb-2">99.000</strong>
          <p className="text-2xl font-bold">REVO Morning</p>
        </div>
        <div className="flex-1">
          <p>đắng, hậu ngọt, hương hoa</p>
        </div>
        <div className="flex flex-row gap-y-8 mt-auto">
          <button className="inline-flex bg-accent-color text-white px-4 rounded-full">
            MUA NGAY
          </button>
          <button>CHI TIẾT</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
