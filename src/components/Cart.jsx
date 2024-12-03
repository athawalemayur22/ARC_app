import React from 'react'
import {useCart} from '../contexts/CartProvider'
import CartItem from './CartItem';
import styles from './Cart.module.css'

function Cart() {
  const {cart} = useCart();
  const cartTotal = cart.reduce((acc, item)=>{
    return acc + item.price * item.quantity
  },0)
  if(cart.length === 0) {
    return <h1>No Items Found !</h1>
  }
  return (
   <div className={styles.cart}>
      <h2 className={styles.cartHeading}>
        Shopping Cart
      </h2>
      <div>
        {
          cart.map((item)=>{
            return <CartItem key={item.id} {...item}/>
          })
        }
      </div>
      <h2>Total Amount: &#8377;{cartTotal}</h2>
   </div>
  )
}
export default Cart
