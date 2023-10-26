import express from 'express';
import { ProductController } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.route('/getProductsFromStorage').post(
    (req,res)=>new ProductController().getProductsFromStorage(req,res)
);

productRouter.route('/getProductByNames').post(
    (req,res)=>new ProductController().getProductByNames(req,res)
);

export default productRouter;