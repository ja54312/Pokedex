import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "antd";
import Searcher from "./components/Searcher/Searcher";
import PokeList from "./components/PokeList/PokeList";
import { getPokemons } from "./api";
import { getPokemonsWithDetails } from "./actions";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
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
