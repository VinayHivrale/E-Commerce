import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const products = [
  {
      id: 1,
      imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/top/u/z/r/xxl-1-amrpuffsleevecoffeegoldtop-aishu-fabric-original-imagr3zvntgfa3s8.jpeg?q=70",
      brand: "Madstitches Apparels Private Limited",
      title: "Party Regular Sleeves Floral Print, Printed Women White...",
      color: "white",
      discountedPrice: 426,
      price: 2500,
      discountPercent: 80,
      size: [
          { name: "S", quantity: 20 },
          { name: "M", quantity: 30 },
          { name: "L", quantity: 50 }
      ],
      quantity: 100,
      topLevelCategory: "Women",
      secondLevelCategory: "Clothing",
      thirdLevelCategory: "top",
      description: "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style."
  },
  {
      id: 2,
      imageUrl: "https://rukminim1.flixcart.com/image/612/612/krtjgcw0/top/o/c/0/s-tsh-cartoon-wht-juneberry-original-imag5gqyp4xbsty4.jpeg?q=70",
      brand: "JUNEBERRY",
      title: "Women Printed Round Neck Pure Cotton White T-Shirt",
      color: "white",
      discountedPrice: 349,
      price: 1199,
      discountPercent: 70,
      size: [
          { name: "S", quantity: 20 },
          { name: "M", quantity: 30 },
          { name: "L", quantity: 50 }
      ],
      quantity: 100,
      topLevelCategory: "Women",
      secondLevelCategory: "Clothing",
      thirdLevelCategory: "top",
      description: "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style."
  },
  {
      id: 3,
      imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/0/7/c/l-rzw01tiediewhite-rodzen-original-imagmptnf6adwuht.jpeg?q=70",
      brand: "RodZen",
      title: "Women Printed Round Neck Pure Cotton White T-Shirt",
      color: "white",
      discountedPrice: 404,
      price: 1499,
      discountPercent: 70,
      size: [
          { name: "S", quantity: 20 },
          { name: "M", quantity: 30 },
          { name: "L", quantity: 50 }
      ],
      quantity: 100,
      topLevelCategory: "Women",
      secondLevelCategory: "Clothing",
      thirdLevelCategory: "top",
      description: "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style."
  },
  {
      id: 4,
      imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/top/4/r/b/s-1-amrfullsleeveblackgreytop-aishu-fabric-original-imagr3zv2kzvn9nv.jpeg?q=70",
      brand: "Madstitches Apparels Private Limited",
      title: "Party Regular Sleeves Floral Print, Printed Women White...",
      color: "white",
      discountedPrice: 426,
      price: 2500,
      discountPercent: 80,
      size: [
          { name: "S", quantity: 20 },
          { name: "M", quantity: 30 },
          { name: "L", quantity: 50 }
      ],
      quantity: 100,
      topLevelCategory: "Women",
      secondLevelCategory: "Clothing",
      thirdLevelCategory: "top",
      description: "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style."
  },
  {
      id: 5,
      imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/top/6/o/5/xl-amrfullsleeveswhiteleafprinttop-keep-cart-original-imagqwxtjy3hjeft.jpeg?q=70",
      brand: "Madstitches Apparels Private Limited",
      title: "Party Regular Sleeves Floral Print, Printed Women White...",
      color: "white",
      discountedPrice: 449,
      price: 2500,
      discountPercent: 80,
      size: [
          { name: "S", quantity: 20 },
          { name: "M", quantity: 30 },
          { name: "L", quantity: 50 }
      ],
      quantity: 100,
      topLevelCategory: "Women",
      secondLevelCategory: "Clothing",
      thirdLevelCategory: "top",
      description: "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style."
  },
 
];



 
  
   function Product() {
    return (
        <div className="bg-white">
        <div className="xs:mx-5 px-4 sm:px-6 lg:max-w-7xl">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
      
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <HomeSectionCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>      
    )
  }

export default Product;
