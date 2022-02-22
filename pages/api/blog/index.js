import dbConnect from "../../../util/mongo";
import Blog from "../../../models/Blog";

export default async function handler(req, res) {
    const {method} = req;

    dbConnect()

    if(method === 'GET') {
      try{
        const blogs = await Blog.find()
        res.status(200).json(blogs)
      }catch(err){
        res.status(500).json(err)
      }
    }

    if(method === 'POST') {
      try{
        const blog = await Blog.create(req.body)
        res.status(201).json(blog)
      }catch(err){
        res.status(500).json(err)
      }
    }
  }
