import express from 'express';
import { MachineController } from '../controllers/machine.controller';

const machineRouter = express.Router();

machineRouter.route('/getAllMachines').post(
    (req,res)=>new MachineController().getAllMachines(req,res)
);

machineRouter.route('/getAllMachineUnitsByIds').post(
    (req,res)=>new MachineController().getAllMachineUnitsByIds(req,res)
);

machineRouter.route('/getAllMachinesByIds').post(
    (req,res)=>new MachineController().getAllMachinesByIds(req,res)
);

machineRouter.route('/getAllCars').post(
    (req,res)=>new MachineController().getAllCars(req,res)
);

machineRouter.route('/getMap').post(
    (req,res)=>new MachineController().getMap(req,res)
);

machineRouter.route('/getAllMapsByIds').post(
    (req,res)=>new MachineController().getAllMapsByIds(req,res)
);


export default machineRouter;