import productService from "../services/product.service.js";

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product); 
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(200).send(product); // 200 for successful deletion
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId, req.body);
        return res.status(200).send(product); // 200 for successful update
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        return res.status(200).send(product); // 200 for successful retrieval
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProduct(req.query);
        return res.status(200).send(products); // 200 for successful retrieval
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const createMultipleProduct = async (req, res) => {
    try {
        await productService.createMultipleProduct(req.body);
        return res.status(201).send({ message: "Products Created Successfully" }); // 201 for resource creation
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const productController = {
    createProduct,
    deleteProduct,
    updateProduct,
    createMultipleProduct,
    getAllProducts,
    findProductById,
};

export default productController;
