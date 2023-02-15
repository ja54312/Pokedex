import { Col } from 'antd'
import Searcher from './components/Searcher/Searcher.jsx'
import PokeList from './components/PokeList/PokeList.jsx'
import './App.css'

function App() {


  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokeList />
    </div>
  )
}

export default App
