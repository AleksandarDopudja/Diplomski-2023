import express from "express";
import Stock from '../models/stock';

export class StockController{

    getStockFromStorage = (req: express.Request, res: express.Response)=>{

        let ids = req.body.ids;
    
        Stock.find({'ids': ids }, (err, st)=>{
            if(err) console.log(err);
            else res.json(st);
        })
    }

    getProductsFromStorage = (req: express.Request, res: express.Response)=>{

        let idArr = req.body.ids;
    
        Stock.find({ 'idp': { $in: idArr }}, (err, st)=>{
            if(err) console.log(err);
            else res.json(st);
        })
    }

    getTotalStockQuant = (req: express.Request, res: express.Response)=>{

        let ids = req.body.ids;

        Stock.find({'ids': ids }, (err, p) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'An error occurred' });
            }
        
            const totalQuantity = p.reduce((sum, item) => sum + item.quantity, 0);
            res.json({ totalQuantity: totalQuantity });
        });
    }

}