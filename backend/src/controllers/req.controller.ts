import express from "express";
import Req from '../models/req';

export class ReqController{

    getAllReq = (req: express.Request, res: express.Response)=>{

        let status = req.body.status;
    
        Req.find({'status': status }, (err, r)=>{
            if(err) console.log(err);
            else res.json(r);
        })
    }

    getAllReqByIds = (req: express.Request, res: express.Response)=>{

        let ids = req.body.ids;
    
        Req.find({ '_id': { $in: ids }}, (err, r)=>{
            if(err) console.log(err);
            else res.json(r);
        })
    }

    getReq = (req: express.Request, res: express.Response)=>{

        let ids = req.body.ids;
        let idu = req.body.idu;
    
        Req.find({ '_id': { $in: ids }, 'idu': idu}, (err, r)=>{
            if(err) console.log(err);
            else{
                res.json(r);
            } 
        })
    }

    getReqByUsername = (req: express.Request, res: express.Response)=>{

        let idu = req.body.idu;
    
        Req.find({'idu': idu}, (err, r)=>{
            if(err) console.log(err);
            else{
                res.json(r);
            } 
        })
    }

    updateStatus = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        let status = req.body.status;

        Req.updateOne({'_id':id}, {$set: {'status': status}}, (err)=>{
            if(err)console.log(err);
            else{
                return res.json({'message':'ok'});
            }
        });
    }

}