import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons';


const PokeCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt='ditto' />}
      extra={<StarOutlined />}
    >
      <Card.Meta
        description='normal'
      />
    </Card>
  )
}

export default PokeCard