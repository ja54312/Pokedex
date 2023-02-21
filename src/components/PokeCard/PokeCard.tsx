import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons';


const PokeCard = ({ name ,image}) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Card.Meta
        description='normal'
      />
    </Card>
  )
}

export default PokeCard