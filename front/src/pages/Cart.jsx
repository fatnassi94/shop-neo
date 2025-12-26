import React,{ useContext, useEffect,useState} from 'react'
import { ShopContext } from '../context/ShopContext.jsx'

const Cart = () => {
  const { cartItems, products } = useContext(ShopContext);
  const [productCart, setProductCart] = useState([])
 
  useEffect(() => {
    const productsInCart = products.filter(product => Object.keys(cartItems).includes(product._id)).map(product => {
      return {...product, productQty: cartItems[product._id]};
    });
    setProductCart(productsInCart);
  })
  
  
  return (
    <section className='min-h-screen bg-linear-to-r from bg-indigo-900 via-purple-900 to-pink-900 text-white pt-20 px-6 sm:px-10'>
      <h2 className='text-5xl font-extrabold text-center pb-20'>Cart Page</h2>
      {productCart.map((product) => (
        <div key={product._id} className="flex items-center gap-6 p-4 border-b border-white/20">
          <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
          <div>
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-lg">Price: ${product.price}</p>
            <p className="text-lg">Quantity: {product.productQty}</p>
            <p className="text-lg">Total: ${product.price * product.productQty}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Cart
