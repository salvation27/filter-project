import products from './productsApi'
export default function handler(req,res) {
 const {productId}= req.query
 const product = products.find(item=>item.id===parseInt(productId))
 res.status(200).json(product)
}