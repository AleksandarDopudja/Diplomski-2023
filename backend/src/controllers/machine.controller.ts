import express from "express";
import Machine from '../models/machine';
import MachineUnit from '../models/machineunit';
import Car from '../models/car';
import Map from '../models/mapofprod';

export class MachineController{

    getAllMachines = (req: express.Request, res: express.Response)=>{
    
        Machine.find({}, (err, machines)=>{
            if(err) console.log(err);
            else res.json(machines);
        })
    }

    getAllMachineUnitsByIds = (req: express.Request, res: express.Response)=>{

        let ids = req.body.ids;

        //console.log(ids);
    
        MachineUnit.find({ '_id': { $in: ids }}, (err, u)=>{
            if(err) console.log(err);
            else {
                //console.log(u);
                res.json(u);
            }
        })
    }

    getAllMachinesByIds = (req: express.Request, res: express.Response)=>{

        let ids = req.body.ids;
    
        Machine.find({ 'name': { $in: ids }}, (err, machines)=>{
            if(err) console.log(err);
            else res.json(machines);
        })
    }

    getAllCars = (req: express.Request, res: express.Response)=>{
    
        Car.find({}, (err, c)=>{
            if(err) console.log(err);
            else res.json(c);
        })
    }

    getMap = (req: express.Request, res: express.Response)=>{
        let idmu = req.body.idmu;

        Map.find({'idmu': idmu }, (err, users)=>{
            if(err) console.log(err);
            else res.json(users);
        })
    }

    getAllMapsByIds = (req: express.Request, res: express.Response)=>{

        let ids = req.body.ids;
    
        Map.find({ 'idmu': { $in: ids }}, (err, maps)=>{
            if(err) console.log(err);
            else res.json(maps);
        })
    }
}