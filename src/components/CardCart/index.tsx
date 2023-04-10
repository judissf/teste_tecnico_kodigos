import { useContext } from 'react'
import { ICardCart } from '../../interfaces'
import { CardCartStyle } from './style'
import { HiPlus } from 'react-icons/hi'
import { HiMinus } from 'react-icons/hi'
import { Context } from '../../context/Context'

const CardCart = ({ product }: ICardCart) => {
  const { addProductCart, removeProductCart } = useContext(Context)

  return (
    <CardCartStyle>
      <figure>
        <img src={product.img} alt='Imagem do produto' />
      </figure>

      <div className='container'>
        <p id='title'>{product.name}</p>

        <div className='price-quantity'>
          <p id='price'>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </p>

          <div className='quantity'>
            <button onClick={() => {removeProductCart(product.id)
            }}>
              <HiMinus />
            </button>
            <p id='amount'>{product.amount}</p>
            <button
              onClick={() =>
                addProductCart(
                  product.id,
                  product.img,
                  product.name,
                  product.price,
                  product.amount
                )
              }
            >
              <HiPlus />
            </button>
          </div>
        </div>
      </div>
    </CardCartStyle>
  )
}

export default CardCart
