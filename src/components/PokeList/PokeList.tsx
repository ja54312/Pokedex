import PokeCard from '../PokeCard/PokeCard'

const PokeList = ({ pokemons }) => {
  //console.log(pokemons,'pokes')
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        return <PokeCard
          name={pokemon.name}
          key={pokemon.name}
          image={pokemon.sprites.front_default}
        />
      })}
    </div>
  )
}

PokeList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokeList