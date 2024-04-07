import { Category } from "../models/category.model.js";
import { Product } from "../models/product.model.js";

async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });

    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });

    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
    level:3
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });

    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountPercent: reqData.discountPercent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.sizes,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });

  return await product.save();
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);
  return "Product deleted SuccessFully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(productId) {
  const product = await Product.findById(productId).populate("category").exec();

  if (!product) {
    throw new Error("product not fount with id ", productId);
  }

  return product;
}

async function getAllProduct(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  
  console.log("getting the reqdata in this form ",reqQuery);

  pageSize = pageSize || 10;

  let query = Product.find().populate("category");

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }

  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );

    const colorRegex = colorSet.size>0? new RegExp([...colorSet].join("|"),"i"):null;

    query = query.where("color").regex(colorRegex);
  }


if (sizes) {
  const sizesArray = sizes.split(',').map(size => size.trim());
  console.log(sizesArray);
  query = query.where("sizes.name").in(sizesArray);
} else {
  console.log("No sizes provided. No filtering applied.");
}


  if (maxPrice !== undefined && minPrice !== undefined) {
    try {
      query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    } catch (error) {
      console.error("Error building price filter:", error);
    }
  }
   
  if(minDiscount ){
    query = query.where("discountPercent").gte(minDiscount);
  }

  if(stock ){
    if(stock=="in_stock"){
        query = query.where("quantity").gt(0);
    }
    if(stock=="out_of_stock"){
        query = query.where("quantity").lt(1);
    }
  }


  if(sort){
      const sortDirection = sort==="price_high"?-1:1;
      query = query.sort({discountedPrice:sortDirection});
  }

  const totalProducts = await Product.countDocuments(query);

  const skip = Math.max((pageNumber - 1) * pageSize, 0);

  query = query.skip(skip).limit(pageSize);

  const products = await query.exec();
  
  const totalPages = Math.ceil(totalProducts / pageSize);

  console.log(products);

  return {content:products,currentPage:pageNumber,totalPages,}

}

async function createMultipleProduct(products){
    for (const product of products) {
        await createProduct(product);
    }
}

const productService = {
   createProduct,
   deleteProduct,
   getAllProduct,
   updateProduct,
   findProductById,
   createMultipleProduct
};

export default productService;
