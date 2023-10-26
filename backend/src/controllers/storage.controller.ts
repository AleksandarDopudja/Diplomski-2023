import express from "express";
import Storage from '../models/storage';

export class StorageController{

    getAllStorages = (req: express.Request, res: express.Response)=>{
    
        Storage.find({}, (err, storages)=>{
            if(err) console.log(err);
            else res.json(storages);
        })
    }


}