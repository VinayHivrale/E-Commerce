import CategoryCard from "./CategoryCard"

const CategoryContainer = () => {
  const cate = ["Shirt", "T-shirt", "Jeans", "Casual Shoes", "Shorts", "Jackets"]

  return (

    <div className=" grid justify-center py-[40px] relative  ">
      <h2 className="font-semibold md:text-[30px] text-[20px]  text-[#3E4156] md:p-3 md:m-3 p-1">Categories for bag</h2>
      <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scrollbar-hide md:pt-[20px] pt-[10px]">
        {cate.map((category) => {
          return (<CategoryCard CategoryType={category} />);
        })}
      </div>
    </div>
  )
}

export default CategoryContainer;