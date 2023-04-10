import { useContext } from 'react'
import { Context } from '../../context/Context'
import { PaymentStyle } from './style'
import { BiExit } from 'react-icons/bi'
import { HiCreditCard } from 'react-icons/hi'
import { FiDollarSign } from 'react-icons/fi'
import { CiBarcode } from 'react-icons/ci'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import CardPayment from '../CardPayment'
import { v4 as uuid } from 'uuid'

const Payment = () => {
  const { setShowPayment, total, cartItems, clearCart } = useContext(Context)
  const date = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1 < 10 ? '0' : ''
  }${new Date().getMonth() + 1}-${
    new Date().getDate() <= 9 ? '0' : ''
  }${new Date().getDate()}`

  const items = cartItems.reduce((prev, cur) => prev + cur.amount, 0)

  return (
    <PaymentStyle>
      <div className='container'>
        <div className='header'>
          <h3>Pagamento</h3>

          <button onClick={() => setShowPayment(false)}>
            Fechar
            <BiExit />
          </button>
        </div>

        <div className='content'>
          <div className='purchase-order-delivery'>
            <div className='purchase-order'>
              <p id='title-purchase'>Carrinho</p>

              <ul className='list-products'>{
                cartItems.map((product) => <CardPayment key={uuid()} product={product} />)
              }</ul>
            </div>

            <div className='delivery-total'>
              <label id='label-delivery'>
                Data para entrega
                <input
                  type='date'
                  min={date}
                  name='delivery'
                  id='delivery-date'
                />
              </label>

              <div className='items-total'>
                <p id='items'>Itens: {items}</p>

                <p id='total'>
                  Total{' '}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(total())}
                </p>
              </div>
            </div>
          </div>

          <div className='payments'>
            <p id='title-payments'>Métodos de pagamento</p>

            <div className='inputs'>
              <label id='label-debito' htmlFor='debito'>
                <input type='radio' name='payment' id='debito' />
                <HiCreditCard />
                Débito
              </label>

              <label id='label-credito' htmlFor='credito'>
                <input type='radio' name='payment' id='credito' />
                <HiCreditCard />
                Crédito
              </label>

              <label id='label-pix' htmlFor='pix'>
                <input type='radio' name='payment' id='pix' />
                <FiDollarSign />
                PIX
              </label>

              <label id='label-boleto' htmlFor='boleto'>
                <input type='radio' name='payment' id='boleto' />
                <CiBarcode />
                Boleto
              </label>
            </div>
          </div>

          <button id='button-buy' onClick={() => {
            clearCart()
            setShowPayment(false)
            toast.success('Compra efetuada')}}>
            <FaHandHoldingUsd />
            Finalizar compra</button>
        </div>
      </div>
    </PaymentStyle>
  )
}

export default Payment
