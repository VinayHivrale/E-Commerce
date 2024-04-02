
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function ProductDetail() {

    const sizes = [38, 40, 42, 44];


    return (
        <>

        
            <div className="flex justify-center items-center w-auto  lg:ms-[300px] md:me-[50px] xl:ms-[100px] ">
                <div style={{ marginTop: "110px" }}>
                    <div className=" flex  justify-start w-auto h-auto text-[14px] text-[#d4d5d9] font-[Arial, Helvetica, sans-serif] mt-[30px] me-[20px] mb-[5px] ms-[10px] lg:ms-[90px]">
                        <a href="#" className=" no-underline text-[#7e818c]  ">
                            Actual path  to product
                        </a>
                    </div>

                    <div className="flex mt-[30px] flex-col lg:flex-row justify-center items-center w-auto ">
                        <div className="cursor-zoom-in bg-[#a040a0] lg:w-[700px] lg:h-[500px]  w-[250px] h-[300px] border-none overflow-hidden  ">
                        <img className=" mb-[10px] w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110 " src="../src/assets/tshirt.png" alt="T-shirt" />

                        </div>
                        <div className="w-[100%] bg-[#ffffff]  p-[10px] pt-[0px]  lg:ms-[100px]    ">

                            <div className="flex flex-col mt-[40px] lg:mt-[0px] justify-center items-center lg:justify-start lg:items-start mb-[30px] lg:mb-[10px] ">
                            <h1 className=" p-[0px] m-[0px] text-[#131314] text-[24px] font-extrabold mt-[10px] ">Powerlook</h1>
                            <h1 className="p-[10px] ps-[0px]  ms-[15px] lg:ms-[0px] text-[#131314] text-[18px] font-normal ">Mandarin Collar Long Sleeves Opaque Casual Shirt</h1>
                            <div className=" font-[ 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif] mt-[10px] lg:mt-[20px] ms-[0px] text-[20px] h-[63px] flex flex-col  w-auto lg:ps-[0px] bg-[#fffff] mb-[20px] ">
                                <pre className=" m-[0px] font-[ 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif]  " ><strong className=" font-bold ">$900</strong> <span className=" line-through text-[18px] font-normal  ">MRP 1000</span>  <span className="text-green-700 font-bold ">(38% OFF)</span></pre>
                                <span className="text-[16px] text-[#4598e0] ">inclusive of all taxes</span>
                            </div>
                            <div className="flex flex-col  w-auto  bg-[#fffff] lg:mb-[10px] lg:px-[0px] m-0  ">

                                <label htmlFor="selectSize"><strong className=" font-serif text-[16px] ">SELECT SIZE</strong></label>

                            
                            <div className=" flex lg:mt-[30px] me-[10px] mb-[30px] ms-[0px] mt-[20px] ">
                                {
                                    sizes.map((size) => {
                                        return (<div className=" rounded-[50%] border-2 border-solid border-black w-[40px] h-[40px]  flex justify-center pt-[5px]  me-[15px] ">
                                            {size}
                                        </div>)

                                    })
                                }

                            </div>
                            </div>
                            </div>

                            <div className="flex justify-center ">
                                <div className="flex w-[100%]  flex-col gap-7 lg:flex-row items-center ">
                                <button className=" h-[45px] bg-[#c12acb] rounded-md font-bold text-[18px] lg:me-[10px]   cursor-pointer lg:w-[250px] w-full  ">
                                    <ShoppingBagIcon /><sapn className="ms-[10px]">Add To Cart</sapn>
                                </button>
                                <button className="lg:w-[175px] w-full h-[45px] rounded-md bg-[#f8f6f6] text-[18px] text-[#131314] border-2 border-solid border-[#2e2e2e] ">
                                    <FavoriteBorderIcon />< sapn className="ms-[10px] font-bold"> Wishlist</sapn>
                                </button>
                            </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
         
        </>

    );
}