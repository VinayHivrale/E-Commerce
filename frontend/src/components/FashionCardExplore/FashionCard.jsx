import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export const FashionCard = ({typeOfFashion,image}) => {
    return (
        <>

            <div className=" relative sm:w-[600px] sm:h-[180px] md:h-[230px] xl:h-[260px] w-full h-[180px] px-2 bg-white ease-linear"> 
                <div className="border-4 rounded-md w-full h-full ">
                    <img src={image} alt="" className="w-full h-full  object-fill  " />
                </div>
                <div  className=" absolute bottom-5 left-5 ">
                
                    <p className="text-slate-100 text-[20px] sm:text-[20px] md:text-[27px] font-bold xl:text-[30px] mb-[2px]"> {typeOfFashion}</p>
                    <button className="text-slate-100 align-middle  text-[12px] sm:text-[14px] md:text-[17px] xl:text-[18px] font-semibold">Explore More <span><ArrowOutwardIcon /></span></button>
                </div>
            </div>

        </>
    )
}
