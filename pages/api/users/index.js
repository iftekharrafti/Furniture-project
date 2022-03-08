import dbConnect from "../../../util/mongo";
import Users from "../../../models/Users";

export default async function handler(req, res) {
    const {method} = req;

    dbConnect()

    if(method === 'GET') {
      try{
        
      }catch(err){
        res.status(500).json(err)
      }
    }

    if(method === 'POST') {
      try{
        const User = await Users.create(req.body)
        res.status(201).json(User)
      }catch(err){
        res.status(500).json(err)
      }
    }
  }
