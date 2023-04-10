import { FiltersStyle } from './style'
import { IoOptionsOutline } from 'react-icons/io5'
import Filter from '../Filter'

const Filters = () => (
  <FiltersStyle>
    <div className='filter-title'>
      <IoOptionsOutline />
      Filtros
    </div>
    <div className='filter-fields'>
      <div className='field-categories'>
        <p id='title-categories'>Categorias</p>

        <Filter id='teclado' value='teclado' legend='Teclado' />
        <Filter id='monitor' value='monitor' legend='Monitor' />
        <Filter id='mouse' value='mouse' legend='Mouse' />
        <Filter id='placa de vídeo' value='placa de vídeo' legend='Placa de vídeo' />
      </div>

      <div className='field-mark'>
        <p id='title-marks'>Marcas</p>

        <Filter id='acer' value='acer' legend='Acer' />
        <Filter id='amd' value='amd' legend='AMD' />
        <Filter id='razer' value='razer' legend='Razer' />
        <Filter id='redragon' value='redragon' legend='Redragon' />
        <Filter id='nvidia' value='nvidia' legend='Nvidia' />
        <Filter id='samsung' value='samsung' legend='Samsung' />
      </div>

      <div className="field-price">
        <p id='title-prices'>Preço</p>

        <Filter id='price1' value='price1' legend='R$ 0 a R$1.000' />
        <Filter id='price2' value='price2' legend='R$ 1.001 a R$ 3.000' />
        <Filter id='price3' value='price3' legend='Acima de R$ 3.000' />
      </div>
    </div>
  </FiltersStyle>
)

export default Filters
