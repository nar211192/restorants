import useData from "../hooks/useData";
import Card from "../components/Card";
import { useContext, useEffect } from "react";
import RestiorantsContext from "../context/RestorantsContext";
import MyMap from "../components/MyMap";

export default function Restorants() {
  const { getData } = useData();
  const { list, setList, mapOption } = useContext(RestiorantsContext);

  useEffect(() => {
    getData().then((data) => setList(data));
  }, []);

  return (
    <div className="Restorants">
      <div className="Cards">
        {list.map((card, key) => (
          <Card key={key} card={card} />
        ))}
      </div>
      <div>
        <MyMap coords={mapOption.coords} title={mapOption.title} />
      </div>
    </div>
  );
}
