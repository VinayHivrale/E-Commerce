

const CategoryCard = ({CategoryType}) => {
  return (
    
    <div className= 'inline-block cursor-pointer bg-slate-100 hover:bg-slate-300 hover:rounded-md h-auto md:w-[13rem] w-[11rem]  p-[10px] m-[10px] hover:scale-105 ease-in-out duration-100'>

    
        <img src="https://martinvalen.com/17184-large_default/men-s-ripped-jeans-pants-dark-blue.jpg" alt="" className="object-cover  overflow-hidden md:h-[200px] h-[170px] rounded-[50%] w-[200px] border-4 border-solid border-slate-300 " />
     
      <div className=" w-full h-[20px] flex justify-center items-center md:py-[20px] py-[10px] md:pb-[25px]">
       <p className="font-normal md:text-[1.5rem] text-[18px] font-serif ">{CategoryType}</p>
   </div> </div>
   
  )
}

export default CategoryCard