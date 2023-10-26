import express from 'express';
import { ReqController } from '../controllers/req.controller';

const reqRouter = express.Router();

reqRouter.route('/getAllReq').post(
    (req,res)=>new ReqController().getAllReq(req,res)
);

reqRouter.route('/getAllReqByIds').post(
    (req,res)=>new ReqController().getAllReqByIds(req,res)
);

reqRouter.route('/getReq').post(
    (req,res)=>new ReqController().getReq(req,res)
);

reqRouter.route('/getReqByUsername').post(
    (req,res)=>new ReqController().getReqByUsername(req,res)
);

reqRouter.route('/updateStatus').post(
    (req,res)=>new ReqController().updateStatus(req,res)
);

export default reqRouter;