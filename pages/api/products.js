import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === 'POST') {
    const {title, description, price, images} = req.body;

    const productDoc = await Product.create({
      title, description, price, images
    })
    res.json(productDoc);
  }

  if (method === 'DELETE') {
    if(req.query.id) {
      await Project.deleteOne({_id: req.query.id})
      res.json(true)
    }
  }
}