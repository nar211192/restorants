import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import RestiorantsContext from "../context/RestorantsContext";

export default function Card({ card }) {
  const { setMapOption } = useContext(RestiorantsContext);

  const showMap = (event) => {
    setMapOption({
      coords: card.latlng,
      title: card.name,
    });
  };

  return (
    <div className="Card">
      <img alt={card.name} src={card.photograph} />
      <p>{card.name}</p>
      <Link to={`/restorants/${card.id}`}>View restoran</Link>
      <div>
        <button onClick={showMap}>Show map</button>
      </div>
    </div>
  );
}
