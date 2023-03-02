import { Card } from 'antd'
import { useDispatch } from 'react-redux';
import { setFavorite } from '../../actions';
import StarButton from '../StarButton/StarButton';


const PokeCard = ({ name ,image, types,id,favorite}) => {
  const dispatch = useDispatch()
  const typesString = types.map(el => el.type.name).join(', ')

  const HandleonFavorite = () => {
    dispatch(setFavorite({pokemonId:id}))
  }

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={HandleonFavorite}/>}
    >
      <Card.Meta
        description={typesString}
      />
    </Card>
  )
}

export default PokeCard