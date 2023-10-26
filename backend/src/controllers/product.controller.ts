import express from "express";
import Product from '../models/product';

export class ProductController{

    getProductsFromStorage = (req: express.Request, res: express.Response)=>{

        let idArr = req.body.idparr;
    
        Product.find({ '_id': { $in: idArr }}, (err, st)=>{
            if(err) console.log(err);
            else {
                res.json(st);}
        })
    }

    getProductByNames = (req: express.Request, res: express.Response)=>{

        let names = req.body.names;
    
        Product.find({ 'name': { $in: names }}, (err, u)=>{
            if(err) console.log(err);
            else res.json(u);
        })
    }

    

}