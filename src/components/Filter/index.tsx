import { useContext } from 'react'
import { Context } from '../../context/Context'
import { FilterStyle } from './style'
import { IFilter } from '../../interfaces'

const Filter = ({ id, value, legend }: IFilter) => {
  const { setFilter, setSearch } = useContext(Context)

  return (
    <FilterStyle htmlFor={id}>
      <input
        id={id}
        type='radio'
        name='filter'
        value={value}
        onChange={(event) => setFilter(event.currentTarget.value)}
        onClick={() => setSearch('')}
      />
      {legend}
    </FilterStyle>
  )
}

export default Filter
