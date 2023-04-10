import { useContext } from 'react'
import { SearchStyle } from './style'
import { GoSearch } from 'react-icons/go'
import { Context } from '../../context/Context'

const Search = () => {
  const { setSearch, setFilter } = useContext(Context)

  return (
    <SearchStyle onClick={() => setFilter('')}>
      <GoSearch />
      <input
        type='text'
        id='search'
        placeholder='Pesquisar por nome'
        maxLength={40}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
    </SearchStyle>
  )
}

export default Search
