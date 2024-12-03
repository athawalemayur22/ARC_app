import React from 'react'
import { useCart } from '../contexts/CartProvider'
import styles from './Product.module.css'
import { ToastContainer, toast } from 'react-toastify';

function Product({id, title, price, img}) {
  const {addItemToCart, cart} = useCart();
  function handleAdd() {
    for(let item of cart) {
      if(item.id === id) {
        toast.error("Item already added to cart")
        return
      }
    }
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1
    }
    addItemToCart(newCartItem);
    toast.info("Item Added!.")
  }

  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImg}/>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>&#8377;{price}</p>
      <button onClick={handleAdd} className={styles.addToCartBtn}>Add To Cart</button>
    </div>
  )
}

export default Product
