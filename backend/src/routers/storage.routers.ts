import express from 'express';
import { StorageController } from '../controllers/storage.controller';

const storageRouter = express.Router();

storageRouter.route('/getAllStorages').post(
    (req,res)=>new StorageController().getAllStorages(req,res)
);

export default storageRouter;