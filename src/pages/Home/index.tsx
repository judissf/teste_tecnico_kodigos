import { v4 as uuid } from 'uuid'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Search from '../../components/Search'
import Filters from '../../components/Filters'
import { HomeStyle } from './style'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { RxIdCard } from 'react-icons/rx'
import Card from '../../components/Card'
import Payment from '../../components/Payment'

const Home = () => {
  const {
    products,
    search,
    filter,
    setIsBiggerCard,
    isBiggerCard,
    showCart,
    showPayment,
  } = useContext(Context)

  return (
    <>
      <Header />
      {showCart && <Cart />}
      {showPayment && <Payment />}
      <HomeStyle
        overflowY={isBiggerCard == true ? 'auto' : 'auto'}
        overflowX={isBiggerCard == true ? 'hidden' : 'auto'}
        flex_direction={isBiggerCard == true ? 'column' : 'row'}
        flex_wrap={isBiggerCard == true ? 'no-wrap' : 'wrap'}
        height={isBiggerCard == true ? '600px' : '500px'}
      >
        <aside>
          <Filters />
        </aside>

        <div className='container-home'>
          <div className='container-header'>
            <Search />

            <div className='filterResult-styleCards'>
              {filter == 'price1' &&
                'Mostrando produtos com valor entre R$ 0 e R$ 1.000,00'}
              {filter == 'price2' &&
                'Mostrando produtos com valor entre R$ 1.001,00 e R$ 3.000,00'}
              {filter == 'price3' &&
                'Mostrando produtos com valor acima de R$ 3.000,00'}
              {search.length == 0 &&
                filter.length == 0 &&
                'Mostrando todos os produtos. Nenhum filtro aplicado'}
              {search.length > 0 &&
                filter.length == 0 &&
                `Mostrando resultados para: ${search}`}
              {filter.length != 0 &&
                search.length == 0 &&
                !filter.includes('price') &&
                `Mostrando resultados para: ${filter[0]
                  .toUpperCase()
                  .concat(filter.substring(1))}`}

              <div className='styleCards'>
                <p id='legend-styleCards'>Visualização</p>

                <button id='styleSmall' onClick={() => setIsBiggerCard(false)}>
                  <HiOutlineSquares2X2 />
                </button>

                <button id='styleBig' onClick={() => setIsBiggerCard(true)}>
                  <RxIdCard />
                </button>
              </div>
            </div>
          </div>

          <ul className='list-products'>
            {filter.length == 0 &&
              search == '' &&
              products.map((product) => (
                <Card key={uuid()} product={product} />
              ))}
            {filter == 'price1' &&
              products.map(
                (product) =>
                  product.price <= 1000 && (
                    <Card key={uuid()} product={product} />
                  )
              )}
            {filter == 'price2' &&
              products.map(
                (product) =>
                  product.price > 1000 &&
                  product.price <= 3000 && (
                    <Card key={uuid()} product={product} />
                  )
              )}
            {filter == 'price3' &&
              products.map(
                (product) =>
                  product.price > 3000 && (
                    <Card key={uuid()} product={product} />
                  )
              )}
            {filter.length != 0 &&
              products.map(
                (product) =>
                  (product.category == filter || product.mark == filter) && (
                    <Card key={uuid()} product={product} />
                  )
              )}
            {search.length != 0 &&
              products.map(
                (product) =>
                  product.name.toLowerCase().includes(search.toLowerCase()) && (
                    <Card key={uuid()} product={product} />
                  )
              )}
          </ul>
        </div>
      </HomeStyle>
      <Footer />
    </>
  )
}

export default Home
