import {heroes} from '../data/heroes';

export const getHeroesByName = (name) => {

    const data = heroes.filter(hero => 
        {
            const hero2 = hero.superhero?.toLowerCase();
            return hero2.includes(name?.toLowerCase());
        }
        );

  return data ? data : [];

}
