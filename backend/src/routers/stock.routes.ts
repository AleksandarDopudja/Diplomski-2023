import express from 'express';
import { StockController } from '../controllers/stock.controller';

const stockRouter = express.Router();

stockRouter.route('/getStockFromStorage').post(
    (req,res)=>new StockController().getStockFromStorage(req,res)
);

stockRouter.route('/getTotalStockQuant').post(
    (req,res)=>new StockController().getTotalStockQuant(req,res)
);

export default stockRouter;