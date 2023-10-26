import express from "express";
import User from '../models/user';

import DisOrder from '../models/disorder'

import ClientReq from '../models/clientreq'

export class UserController{

    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        User.findOne({'username':username, 'password':password}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }

    register = (req: express.Request, res: express.Response) => {
        const username = req.body.username;
        const mail = req.body.mail;
    
        this.doesUserExist(username, (userExists: boolean) => {
            if (userExists) {
                res.status(200).json({ 'message': 'Korisnicko ime vec u upotrebi!' });
            } else {
                this.doesMailInUse(mail, (mailInUse: boolean) => {
                    if (mailInUse) {
                        res.status(200).json({ 'message': 'Email vec u upotrebi!' });
                    } else {
                        let user = new User({
                            username: username,
                            password: req.body.password,
                            tell: req.body.tell,
                            mail: mail,
                            foto: req.body.foto,
                            type: parseInt(req.body.type),
                            status: 0,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            agencyname: req.body.agencyname,
                            country: req.body.country,
                            city: req.body.city,
                            street: req.body.street,
                            mb: req.body.mb
                        });

                
    
                        User.insertMany(user);
                        res.status(200).json({ 'message': 'User added' });
                    }
                });
            }
        });
    }

    registerAdmin = (req: express.Request, res: express.Response) => {
        const username = req.body.username;
        const mail = req.body.mail;
    
        this.doesUserExist(username, (userExists: boolean) => {
            if (userExists) {
                res.status(200).json({ 'message': 'Korisnicko ime vec u upotrebi!' });
            } else {
                this.doesMailInUse(mail, (mailInUse: boolean) => {
                    if (mailInUse) {
                        res.status(200).json({ 'message': 'Email vec u upotrebi!' });
                    } else {
                        let user = new User({
                            username: username,
                            password: req.body.password,
                            tell: req.body.tell,
                            mail: mail,
                            foto: req.body.foto,
                            type: parseInt(req.body.type),
                            status: 1,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            agencyname: req.body.agencyname,
                            country: req.body.country,
                            city: req.body.city,
                            street: req.body.street,
                            mb: req.body.mb
                        });

                        //console.log("ok");
    
                        User.insertMany(user);
                        res.status(200).json({ 'message': 'User added' });
                    }
                });
            }
        });
    }

    
    doesUserExist = (username: string, callback: (userExists: boolean) => void) => {
        User.findOne({ 'username': username }, (err, user) => {
            if (err) {
                console.log(err);
                callback(false);
            } else {
                callback(user !== null);
            }
        });
    }
    
    doesMailInUse = (mail: string, callback: (mailInUse: boolean) => void) => {
        User.findOne({ 'mail': mail }, (err, user) => {
            if (err) {
                console.log(err);
                callback(false);
            } else {
                callback(user !== null);
            }
        });
    }

    doesUsernameExist = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;

        User.findOne({'username':username}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user!=null);
        })
    }

    changePassword = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let newpassword = req.body.password;

        User.updateOne({'username':username}, {$set: {'password': newpassword}}, (err)=>{
            if(err)console.log(err);
            else{
                return res.json({'message':'ok'});
            }
        });
    }

    setStatusUser = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let status = req.body.status;

        User.updateOne({'username':username}, {$set: {'status': status}}, (err)=>{
            if(err)console.log(err);
            else{
                return res.json({'message':'ok'});
            }
        });
    }

    deleteUser = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;

        User.deleteOne({'username':username}, (err)=>{
            if(err)console.log(err);
            else{
                return res.json({'message':'ok'});
            }
        });
    }

    getUserRequests = (req: express.Request, res: express.Response)=>{

        User.find({'status': 0}, (err, users)=>{
            if(err) console.log(err);
            else res.json(users);
        })
    }

    getAllUsers = (req: express.Request, res: express.Response)=>{

        User.find({}, (err, users)=>{
            if(err) console.log(err);
            else res.json(users);
        })
    }

    getClientUsers = (req: express.Request, res: express.Response)=>{

        User.find({'type': 1 }, (err, users)=>{
            if(err) console.log(err);
            else res.json(users);
        })
    }

    getUser = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;

        User.find({'username': username }, (err, users)=>{
            if(err) console.log(err);
            else res.json(users);
        })
    }

    getAllUsersByUNs = (req: express.Request, res: express.Response)=>{

        let usernames = req.body.usernames;
    
        User.find({ 'username': { $in: usernames }}, (err, u)=>{
            if(err) console.log(err);
            else res.json(u);
        })
    }

    insertOrderReq = (req: express.Request, res: express.Response)=>{

        let dos1 = req.body.dos1;
        let dos2 = req.body.dos2;
        let date = req.body.date;
        let sec = req.body.sec;
        let txt = req.body.txt;

        let ord = new DisOrder({
            dos1: dos1,
            dos2: dos2,
            date: date,
            sec: sec,
            txt: txt,
            status: "aktivan"
        })

        DisOrder.insertMany(ord);
        res.status(200).json({ 'message': 'OrdReq added' });
       
    }

    getDistributionOrders = (req: express.Request, res: express.Response)=>{

        let dos1 = req.body.dos1;

        DisOrder.find({ $or: [ { 'dos1': dos1 }, { 'dos2': dos1 } ] }, (err, ords) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json(ords);
            }
        });
    }

    updateStatusDisOrder = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        let status = req.body.status;

        DisOrder.updateOne({'_id':id}, {$set: {'status': status}}, (err)=>{
            if(err)console.log(err);
            else{
                return res.json({'message':'ok'});
            }
        });
    }


    insertClientReq = (req: express.Request, res: express.Response)=>{

        let username = req.body.username;
        let type = req.body.type;
        let cvan = req.body.cvan;
        let mtype = req.body.mtype;
        let addres = req.body.addres;

        let ord = new ClientReq({
            clientusername: username,
            type: type,
            cvan: parseInt(cvan),
            mtype: mtype,
            addres: addres
        })

        ClientReq.insertMany(ord);
        res.status(200).json({ 'message': 'ClientReq added' });
       
    }

    getClientReq = (req: express.Request, res: express.Response)=>{
    
        ClientReq.find({}, (err, u)=>{
            if(err) console.log(err);
            else res.json(u);
        })
    }

    deleteClientReq = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;

        ClientReq.deleteOne({'_id':id}, (err)=>{
            if(err)console.log(err);
            else{
                return res.json({'message':'ok'});
            }
        });
    }



}