import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findProductsById } from "../../redux/actions/productActions";
import ProductCard from "../product/ProductCard";
import Footer from "../Footer/Footer";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../redux/actions/cartActions";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((store) => store.product?.product);
  const param = useParams();
  const { id } = param;
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size.");
      return;
    }
    const data = {
      productId: param.id,
      size: selectedSize,
    };
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size.name);
    setError("");
  };

  useEffect(() => {
    dispatch(findProductsById(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center w-auto bg-gray-100">
        <div className="flex mt-30 justify-center items-center w-auto p-10">
          <div className="cursor-zoom-in bg-white w-[400px] h-[500px] border border-gray-200 border-solid rounded-md overflow-hidden hover:shadow-black shadow-md hover:shadow-2xl">
            <img
              className="mb-[10px] w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"
              src={product.imageUrl[0]}
              alt="T-shirt"
            />
          </div>

          <div className="w-[800px] h-[500px] p-10 ms-[50px]">
            <h1 className="text-3xl font-[16px] leading-normal">
              {product.title}
            </h1>
            <p className="text-xl font-[12px] mt-5">{product.description}</p>
            <div className="mt-4 text-base flex flex-col w-auto">
              <div className="flex items-center space-x-2 text-xl">
                <span className="text-gray-900 font-bold">
                  ${product.discountedPrice}
                </span>
                <span className="line-through opacity-50 font-semibold">
                  MRP {product.price}
                </span>
                <span className="text-green-900 font-bold ml-2">
                  ({product.discountPercent}% OFF)
                </span>
              </div>
              <div className="flex space-x-5 my-5 text-lg font-semibold text-gray-600">
                <Rating
                  name="half-rating"
                  sx={{ color: "green" }}
                  defaultValue={2.5}
                  readOnly
                />
                <p>56540 Ratings</p>
                <p>3870 reviews</p>
              </div>
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="selectSize" className="text-2xl font-[14px]">
                Select size
              </label>
              <div className="flex mt-2 mb-4">
                {product.sizes.map((size) => (
                  <div
                    onClick={() => handleSelectSize(size)}
                    className={`cursor-pointer rounded-full border-2 border-solid ${
                      selectedSize === size.name
                        ? "bg-black text-white"
                        : "border-gray-800"
                    } w-10 h-10 flex justify-center hover:bg-slate-800 hover:text-white items-center mr-4`}
                    key={size.name}
                  >
                    {size.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex space-x-10">
              <button
                type="button"
                onClick={handleAddToCart}
                className="text-center bg-black text-white p-2 w-[200px] rounded-lg flex items-center hover:scale-95 duration-200"
              >
                <span className="ml-8 mr-2">
                  <ShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />
                </span>
                Add to Cart
              </button>
              <button
                type="button"
                className="text-center bg-black text-white p-2 w-[200px] rounded-lg flex items-center hover:scale-95 duration-200"
              >
                <span className="ml-7 mr-2">
                  <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
                </span>
                Add to wishlist
              </button>
            </div>
              {error && <p className="text-red-400 mt-5">{error}</p>}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 h-screen mt-10 p-10 space-y-5">
        <p className="text-2xl text-gray-500 text-center">Ratings and Reviews</p>
        <div className="grid grid-cols-2 space-x-2">
          <div className="bg-white p-10">
            <div className="overflow-y-scroll scroll-auto h-[500px]">
              {[1, 1, 1, 1, 1].map((item, index) => (
                <div className="flex bg-gray-50 p-10 my-2" key={index}>
                  <Avatar
                    sx={{ width: "70px", height: "70px" }}
                    alt="Remy Sharp"
                    src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"
                  />
                  <div className="ml-5">
                    <p className="text-lg font-semibold">Remy Sharp</p>
                    <p className="text-xs text-gray-700 mb-2">April 5, 2024</p>
                    <Rating
                      name="half-rating"
                      sx={{ color: "green" }}
                      defaultValue={2.5}
                      readOnly
                    />
                    <p>nice product, I love this T-shirt</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10">
            <p className="text-2xl font-bold">Products Ratings</p>
            <div className="flex space-x-3 my-5 items-center">
              <Rating
                name="half-rating"
                sx={{ color: "green" }}
                defaultValue={2.5}
                readOnly
              />
              <p className="text-gray-400">54890 Ratings</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <p className="mr-2 w-[130px]">Excellent</p>
                <div className="flex flex-grow h-2.5 w-full bg-gray-200 rounded overflow-hidden">
                  <div
                    className="bg-green-700"
                    style={{ width: `${75}%` }}
                  ></div>
                </div>
                <p className="ml-2">4500</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 w-[130px]">Very Good</p>
                <div className="flex flex-grow h-2.5 w-full bg-gray-200 rounded overflow-hidden">
                  <div
                    className="bg-[#ace93b]"
                    style={{ width: `${60}%` }}
                  ></div>
                </div>
                <p className="ml-2">4500</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 w-[130px]">Good</p>
                <div className="flex flex-grow h-2.5 w-full bg-gray-200 rounded overflow-hidden">
                  <div
                    className="bg-yellow-500"
                    style={{ width: `${45}%` }}
                  ></div>
                </div>
                <p className="ml-2">4500</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 w-[130px]">Average</p>
                <div className="flex flex-grow h-2.5 w-full bg-gray-200 rounded overflow-hidden">
                  <div
                    className="bg-[#e18645]"
                    style={{ width: `${30}%` }}
                  ></div>
                </div>
                <p className="ml-2">4500</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 w-[130px]">Bad</p>
                <div className="flex flex-grow h-2.5 w-full bg-gray-200 rounded overflow-hidden">
                  <div
                    className="bg-red-700"
                    style={{ width: `${20}%` }}
                  ></div>
                </div>
                <p className="ml-2">4500</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 h-fit mt-10 p-10 space-y-5">
        <p className="text-3xl font-Raleway text-center text-gray-500 hover:text-gray-800 mb-20">
          Similar Products
        </p>
        {/* <div className="grid grid-cols-5">
            {
              // products.map((product)=>(
              //   <ProductCard product={product} key={product.id} />
              // ))
            }
        </div>      */}
      </div>
      <Footer />
    </>
  );
}
