import React from 'react'
import PokeCard from '../PokeCard/PokeCard'

const PokeList = ({pokemons}) => {
    //console.log(pokemons,'pokes')
  return (
     <div className='PokemonList'>
        {pokemons.map((pokemon)=>{ 
             return <PokeCard/>
             })}
    </div>
  )
}

PokeList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokeList