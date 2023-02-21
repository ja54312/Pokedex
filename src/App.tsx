import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "antd";
import Searcher from "./components/Searcher/Searcher";
import PokeList from "./components/PokeList/PokeList";
import { getPokemons,getPokemonDetails } from "./api";
import { setPokemons } from "./actions";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      const pokemonDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)))
      dispatch(setPokemons(pokemonDetailed));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
