import {useEffect, useState} from 'react'
import Modal from './UI/Modal'
import Cart from './Cart'
import styles from './Header.module.css'
import Container from './Container'
import { BsCartFill } from "react-icons/bs";
import {useCart} from '../contexts/CartProvider'

function Header() {
    const {cart} = useCart();
    const totalCartItems = cart.reduce((acc,item)=>{
      return acc + item.quantity
    },0)
    const[isModalOpen, setIsModalOpen] = useState(false)
    useEffect(()=>{
      if(isModalOpen) {
        document.documentElement.style.overflowY = 'hidden'
      } else {
        document.documentElement.style.overflowY = 'scroll'
      }
    }
    ,[isModalOpen])

    function closeModal(){
      setIsModalOpen(false)
    }

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1 className='logo'>ARC SHOW</h1>
          <button className={styles.showCartBtn} onClick={()=>{setIsModalOpen(true)}}>
            <span className={styles.cartIconAndNumber}>
              <BsCartFill />
              {
                totalCartItems > 0 && (
                  <span className={styles.number}>{totalCartItems}</span>
                )
              }
            </span>
            <span>Cart</span>
          </button>
        </nav>
      </Container>
      {
        isModalOpen && ( 
        <Modal closeModal={closeModal}>
            <Cart/>
        </Modal>
      )}
     
    </header>
  )
}

export default Header
