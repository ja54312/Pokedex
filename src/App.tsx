import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col ,Spin} from "antd";
import Searcher from "./components/Searcher/Searcher";
import PokeList from "./components/PokeList/PokeList";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true))
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
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
      {loading ?  <Col offset={12}>
        <Spin spinning size="large"/>
      </Col>: <PokeList pokemons={pokemons} />}
    </div>
  );
}

export default App;
