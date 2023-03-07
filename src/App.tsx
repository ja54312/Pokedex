import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Col ,Spin} from "antd";
import Searcher from "./components/Searcher/Searcher";
import PokeList from "./components/PokeList/PokeList";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) =>
    state.getIn(['data', 'pokemons'], shallowEqual)
  ).toJS();

  const loading = useSelector((state) => state.getIn(['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
