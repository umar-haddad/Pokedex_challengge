import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon, typeColors }) {
  const navigate = useNavigate();

  if (!pokemon) {
    return <p>Error: Pokemon data not provided.</p>;
  }

  return (
    <div
      className="card d-flex flex-column w-80 overflow-clip p-4 rounded-lg border border-dark"
      style={{ backgroundColor: pokemon.color }}
    >
      <img src={pokemon.imageUrl} alt={pokemon.name} className="card-img-top" />

      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>

        <div className="d-flex justify-content-center align-items-center gap-2">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="p-2 rounded border border-dark font-weight-bold"
              style={{
                backgroundColor: typeColors[type] || "rgb(245 208 254)",
              }}
            >
              {type}
            </span>
          ))}
        </div>

        <p className="card-text mt-3 info">{pokemon.description}</p>

        <button
          onClick={() => navigate(`/detail/${pokemon.id}`)}
          className="btn btn-primary mt-2 mx-5"
        >
          Detail
        </button>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  typeColors: PropTypes.object.isRequired,
};

export default PokemonCard;
