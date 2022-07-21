import { useMemo } from 'react';
import {Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHerobyId } from '../helpers/getHerobyId';


export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(()=> getHerobyId(id), [id]); 

  const onNavigateBack = () => {
    navigate(-1);
  }

  if(!hero) {
    return <Navigate to="/" />
  }

  return (
    <div className="row p-5 animate__animated animate__fadeInLeft animate__faster">
    <div className='col-3'>
       <img src={`/public/heroes/${hero.id}.jpg`} alt={hero.superhero}  className="img-thumbnail" />
      </div>
      <div className="col-8">
      <h1>{hero?.superhero}</h1>
      <ul className="list-group list-group-flush ">
      <li className='list-group-item '><b>Alter Ego: </b>{hero.alter_ego}</li>
      <li className='list-group-item '><b>Publisher: </b>{hero.publisher}</li>
      <li className='list-group-item '><b>First Appearance: </b>{hero.first_appearance}</li>
      <li className='list-group-item '><b>Characters: </b>{hero.characters}</li>
      </ul>
      <button className='btn btn-outline-danger m-3' onClick={onNavigateBack}>REGRESAR</button>
      </div>
    </div>
  )


  
}
