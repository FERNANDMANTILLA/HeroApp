import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    "searchText": q ? q : "",
  });

  const heroes = getHeroesByName(q);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length > 0) {
      navigate(`?q=${searchText}`);
    }
    else {
      navigate("");
    }
  }

  return (
    <div className="container">
      <h1>
        SearchPage
      </h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h3>Search</h3>
          <hr />
          <form className="form-group" onSubmit={onSearchSubmit}>
            <input type="text" name="searchText" id="searchText" autoComplete="off"
              value={searchText} onChange={onInputChange}
              className="form-control p-4 rounded-2" />
            <button type="submit" className="btn btn-warning rounded-2 mt-4">SEARCH</button>
          </form>
        </div>
        <div className="col-7">
          <h3>Results</h3>
          <hr />
          {(heroes.length === 0) ? <div className="alert alert-dark">Search for a Hero</div> : ""}
          {(heroes.length === 0) ? <div className="alert alert-danger">Not Found {q}</div> : ""}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}

        </div>
      </div>
    </div>
  )
}


