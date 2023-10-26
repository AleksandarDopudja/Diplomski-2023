import express from 'express';
import { LocationController } from '../controllers/location.controller';

const locationRouter = express.Router();

locationRouter.route('/getAllLocations').post(
    (req,res)=>new LocationController().getAllLocations(req,res)
);

locationRouter.route('/getAllLocationsForMUID').post(
    (req,res)=>new LocationController().getAllLocationsForMUID(req,res)
);

locationRouter.route('/insertLocation').post(
    (req,res)=>new LocationController().insertLocation(req,res)
);

export default locationRouter;