import { useContext } from 'react'
import { HeaderStyle } from './style'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Context } from '../../context/Context'

const Header = () => {
  const { setShowCart, cartItems } = useContext(Context)

  return (
    <HeaderStyle>
      <div className='container-header'>
        <h1>Loja Virtual</h1>
        <div className='user-cart'>
          <div className='user'>
            <div className='user-icon'>
              <AiOutlineUser />
            </div>
            User
          </div>
          <div className='cart'>
            {cartItems.length != 0 && <div className='newItem' />}
            <button onClick={() => setShowCart(true)}>
              <HiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
