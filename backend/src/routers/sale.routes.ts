import express from 'express';
import { SaleController } from '../controllers/sale.controller';

const saleRouter = express.Router();

saleRouter.route('/getSaleForMachineUnit').post(
    (req,res)=>new SaleController().getSaleForMachineUnit(req,res)
);


export default saleRouter;