import { useContext } from 'react'
import { CardPaymentStyle } from './style'
import { Context } from '../../context/Context'
import { ICardPayment } from '../../interfaces'

const CardPayment = ({ product }: ICardPayment) => {
  const { isBiggerCard } = useContext(Context)

  return (
    <CardPaymentStyle>
      <figure>
        <img src={product.img} alt='Imagem do produto' />
      </figure>

      <div className='product-informations'>
        <p id='name'>{product.name.substring(0, 50)}</p>

        <div className='price-quantity'>
          <p id='price'>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </p>
          <p id='quantity'>Quantidade: {product.amount}</p>
        </div>
      </div>
    </CardPaymentStyle>
  )
}

export default CardPayment
