import { Link } from "react-router-dom"


export const HeroCard = ({ hero }) => {

    const charactersByHero = <p className="shadow-text fz-1">{hero.characters }</p>;

    return (
        <div className="col mb-3 animate__animated animate__fadeInUp ">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4 ">
                        <img src={`./public/heroes/${hero.id}.jpg`} className="card-img h-100 object-fit" alt={hero.superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">

                            <h5 className="card-title">
                                {hero.superhero}
                            </h5>

                            <p className="card-text">
                                {hero.alter_ego}
                            </p>

                            {(hero.alter_ego !== hero.characters) && charactersByHero }

                            <p className="card-text">
                                <small className="text-muted">
                                {hero.first_appearance}
                                </small>
                            </p>

                            <Link to={`/hero/${hero.id}`} className="text-info">
                                Ver más
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
