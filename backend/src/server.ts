import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/user.routes';
import machineRouter from './routers/machine.routes';
import storageRouter from './routers/storage.routers';
import stockRouter from './routers/stock.routes';
import productRouter from './routers/product.routes';
import locationRouter from './routers/location.routes';
import reqRouter from './routers/req.routes';
import saleRouter from './routers/sale.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/diplomski');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok');
})

const router = express.Router();
router.use('/user', userRouter);
router.use('/machine', machineRouter);
router.use('/storage', storageRouter);
router.use('/stock', stockRouter);
router.use('/product', productRouter);
router.use('/location', locationRouter);
router.use('/req', reqRouter);
router.use('/sale', saleRouter);

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));