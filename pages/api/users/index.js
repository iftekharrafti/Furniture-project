import dbConnect from "../../../util/mongo";
import User from "../../../models/Users";

export default async function handler(req, res) {
    const {method} = req;

    dbConnect()

    if(method === 'GET') {
      try{
        const user = await User.find();
        res.status(200).json(user);
      }catch(err){
        res.status(500).json(err)
      }
    }

    if(method === 'POST') {
      try{
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
      }catch(err){
        res.status(500).json(err)
      }
    }
  }
