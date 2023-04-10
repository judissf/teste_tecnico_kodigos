import { useContext } from 'react'
import { CartStyle } from './style'
import { Context } from '../../context/Context'
import { FiAlertCircle } from 'react-icons/fi'
import { BiExit } from 'react-icons/bi'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { AiOutlineClear } from 'react-icons/ai'
import CardCart from '../CardCart'
import { v4 as uuid } from 'uuid'
import { toast } from 'react-hot-toast'

const Cart = () => {
  const { cartItems, setShowCart, clearCart, setShowPayment, total } = useContext(Context)

  const items = cartItems.reduce((prev, cur) => prev + cur.amount, 0)

  return (
    <CartStyle height={cartItems.length > 0 ? '480px' : '170px'}>
      <div className='container-cart'>
        <div className='header-cart'>
          <h3>Carrinho</h3>
          <div className='buttons-clear-close'>
            {cartItems.length > 0 && (
              <button id='clear' onClick={() => {clearCart()
                toast.success('Carrinho limpo')
              }}>
                <AiOutlineClear />
                Limpar
              </button>
            )}
            <button id='close' onClick={() => setShowCart(false)}>
            Fechar
            <BiExit />
          </button>
          </div>
        </div>

        {cartItems.length == 0 ? (
          <div className='content-cart-empty'>
            <FiAlertCircle />
            Nenhum produto adicionado ao carrinho
          </div>
        ) : (
          <>
            <div className='content-cart'>
              <ul className='list-products-cart'>
                {cartItems.map((product) => (
                  <CardCart key={uuid()} product={product} />
                ))}
              </ul>
            </div>

            <div className='purchase'>
              <button id='buy' onClick={() => {
                setShowPayment(true)
                setShowCart(false)
              }}>
                <RiMoneyDollarCircleFill />
                Finalizar pedido
              </button>

              <p id='items'>Items: {items}</p>

              <p id='total'>
                Total{' '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total())}
              </p>
            </div>
          </>
        )}
      </div>
    </CartStyle>
  )
}

export default Cart
