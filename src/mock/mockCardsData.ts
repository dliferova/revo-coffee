const mockCardsData: mockCardData[] = [
  {
    id: "1",
    title: "Nguồn gốc",
    icon: "{`#${../../assets/icons/1.svg}`",
    description:
      "Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.",
  },
  {
    id: "2",
    title: "Chất lượng",
    icon: "../../assets/icons/2.svg",
    description:
      "Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê.",
  },
  {
    id: "3",
    title: "Các loại hạt",
    icon: "../../assets/icons/3.svg",
    description:
      "70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean.",
  },
  {
    id: "4",
    title: "Pha chế",
    icon: "../../assets/icons/4.svg",
    description:
      "Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt.",
  },
]

export interface mockCardData {
  id: string
  title: string
  icon: string
  description: string
}

export default mockCardsData
