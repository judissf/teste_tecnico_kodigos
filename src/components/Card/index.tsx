import { useContext } from 'react'
import { CardStyle } from './style'
import { RiAddCircleFill } from 'react-icons/ri'
import { Context } from '../../context/Context'
import { ICard } from '../../interfaces'
import { VscError } from 'react-icons/vsc'
import { toast } from 'react-hot-toast'

const Card = ({ product }: ICard) => {
  const { isBiggerCard, addProductCart } = useContext(Context)

  return (
    <CardStyle
      width={isBiggerCard == true ? '980px' : '300px'}
      height={isBiggerCard == true ? '200px' : '442px'}
      width_price_quantity={isBiggerCard == true ? '500px' : '268px'}
      flex_direction={isBiggerCard == true ? 'row' : 'column'}
      margin_bottom={isBiggerCard == true ? '0' : '5px'}
      heightDescription={isBiggerCard == true ? '80px' : '120px'}
      heightPriceQuantityButton={isBiggerCard == true ? '32px' : '70px'}
      buttonWidth={isBiggerCard == true ? '180px' : '268px'}
      gap={isBiggerCard == true ? '5px' : '10px'}
      filter={product.stock > 0 ? '' : 'grayscale(100%)'}
      color={product.stock > 0 ? '#006cd0' : 'darkgray'}
    >
      <figure>
        <img src={product.img} alt='Imagem do produto' />
      </figure>

      <div className='product-informations'>
        <p id='name'>{product.name}</p>
        <p id='description'>
          {product.description} Lorem ipsum, dolor sit amet consectetur
          adipisicing elit...
        </p>

        <div className='price-quantity-button'>
          <div className='product-price-quantity'>
            <p id='price'>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </p>
            <p id='quantity'>Estoque: {product.stock}</p>
          </div>

          {product.stock > 0 ? (
            <button
              onClick={() =>
                {addProductCart(
                  product.id,
                  product.img,
                  product.name,
                  product.price,
                  product.amount
                )
                  toast.success('Produto adicionado ao carrinho')
              }
              }
              id='add-item'
            >
              <RiAddCircleFill />
              Adicionar ao carrinho
            </button>
          ) : (
            <button id='unavailable'>
              <VscError />
              Produto sem estoque
            </button>
          )}
        </div>
      </div>
    </CardStyle>
  )
}

export default Card
