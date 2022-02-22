import dbConnect from "../../../util/mongo";
import Blog from "../../../models/Blog";

export default async function handler(req, res) {
    const {method, query:{id}} = req;

    dbConnect()

    if(method === 'GET') {
      try{
        const blog = await Blog.findById(id)
        res.status(200).json(blog)
      }catch(err){
        res.status(500).json(err)
      }
    }

    if(method === 'POST') {
      try{
        
      }catch(err){
        
      }
    }
  }
