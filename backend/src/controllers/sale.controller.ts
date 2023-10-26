import express from "express";
import Sale from '../models/sale';

export class SaleController{

    getSaleForMachineUnit = (req: express.Request, res: express.Response)=>{

        let idmu = req.body.idmu;
    
        Sale.find({ 'idmu': idmu}, (err, s)=>{
            if(err) console.log(err);
            else res.json(s);
        })
    }
}