import express from "express";
import Location from '../models/location';

export class LocationController{

    getAllLocations = (req: express.Request, res: express.Response)=>{
    
        Location.find({}, (err, locations)=>{
            if(err) console.log(err);
            else res.json(locations);
        })
    }

    getAllLocationsForMUID = (req: express.Request, res: express.Response)=>{

        let id = req.body.id;
    
        Location.find({
            $or: [
              { 'idRR': { $in: [id] } }, // Proverava polje IdRR
              { 'idSR': { $in: [id] } }  // Proverava polje idBR
            ]
          }, (err, results) => {
            if (err) {
              //console.log(err);
              res.status(500).json({ error: 'Greška prilikom pretrage baze podataka.' });
            } else {
                //console.log(results);
              res.json(results);
            }
          });
    }

    insertLocation = (req: express.Request, res: express.Response)=>{

      let x = req.body.x;
      let y = req.body.y;
      let name = req.body.name;
      let addr = req.body.addr;
      let idRR = req.body.idRR;
      let idSR = req.body.idSR;

      let ord = new Location({
          x: x,
          y: y,
          name: name,
          addr: addr,
          idRR: idRR,
          idSR: idSR
      })

      Location.insertMany(ord);
      res.status(200).json({ 'message': 'Location added' });
     
  }

}