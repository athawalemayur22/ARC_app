import React from 'react'
import { useCart } from '../contexts/CartProvider'
import styles from './CartItem.module.css'
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";



function CartItem({id, title, price, quantity,img}) {
 const {increaseQty, decreaseQty, removeItemFromCart} = useCart()
  return (
    <div className={styles.cartItem}>
      {/* Left */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}>
          <img src={img} alt={title} className={styles.cartImg} />
        </div>
        <h3>{title}</h3>
      </div>

      {/* Right */}
      <div className={styles.otherControls}>
        <div>
          <button
            className={styles.qtyInput}
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              decreaseQty(id);
            }}
          >
            <AiOutlineMinus />
          </button>
          <span className={styles.qtyDisplay}>{quantity}</span>
          <button
            className={styles.qtyInput}
            onClick={() => {
              increaseQty(id);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <p className={styles.totalCartPrice}>&#8377; {price * quantity}</p>

        <button
          className={styles.removeItemBtn}
          onClick={() => {
            removeItemFromCart(id);
          }}
        >
          <FaTrashAlt />
        </button>
        
      </div>
    </div>
  );
}

export default CartItem
