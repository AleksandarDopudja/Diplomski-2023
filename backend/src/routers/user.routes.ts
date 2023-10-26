import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post(
    (req,res)=>new UserController().login(req,res)
);

userRouter.route('/register').post(
    (req,res)=>new UserController().register(req,res)
);

userRouter.route('/registerAdmin').post(
    (req,res)=>new UserController().registerAdmin(req,res)
);

userRouter.route('/delete').post(
    (req,res)=>new UserController().deleteUser(req,res)
);

userRouter.route('/setStatus').post(
    (req,res)=>new UserController().setStatusUser(req,res)
);

userRouter.route('/getAllUsers').post(
    (req,res)=>new UserController().getAllUsers(req,res)
);

userRouter.route('/getAllUsersByUNs').post(
    (req,res)=>new UserController().getAllUsersByUNs(req,res)
);

userRouter.route('/insertOrderReq').post(
    (req,res)=>new UserController().insertOrderReq(req,res)
);

userRouter.route('/getDistributionOrders').post(
    (req,res)=>new UserController().getDistributionOrders(req,res)
);

userRouter.route('/updateStatusDisOrder').post(
    (req,res)=>new UserController().updateStatusDisOrder(req,res)
);

userRouter.route('/insertClientReq').post(
    (req,res)=>new UserController().insertClientReq(req,res)
);

userRouter.route('/getClientReq').post(
    (req,res)=>new UserController().getClientReq(req,res)
);

userRouter.route('/deleteClientReq').post(
    (req,res)=>new UserController().deleteClientReq(req,res)
);

export default userRouter;