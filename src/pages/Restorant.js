import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import RestiorantsContext from "../context/RestorantsContext";
import useData from "../hooks/useData";

export default function Restorant() {
  const { id } = useParams();
  const refName = useRef();
  const refComment = useRef();
  const [state, setState] = useState(null);
  const { getDetail, sendFeedback } = useData();
  const [rating, setRating] = useState(0);

  const { list, setList } = useContext(RestiorantsContext);

  useEffect(() => {
    const result = list.find((v) => v.id === Number(id));
    if (result) {
      return setState(result);
    }

    getDetail(id).then((data) => {
      if (!data) {
        return setState(undefined);
      }
      setList((prev) => [...prev, data]);
    });
  }, [list]);

  const ratingClickHandler = (rate) => {
    setRating(rate);
  };

  const sendFeedbackHandler = (event) => {
    event.preventDefault();

    sendFeedback(id, {
      comment: refComment.current.value,
      name: refName.current.value,
      rating,
    }).then((feedback) => {
      setList((prev) =>
        prev.map((v) =>
          v.id !== Number(id) ? v : { ...v, reviews: [...v.reviews, feedback] }
        )
      );

      refComment.current.value = '';
      refName.current.value = '';
      setRating(0);
    });
  };

  return state === null ? (
    <>Loading...</>
  ) : state === undefined ? (
    <>Invalid id</>
  ) : (
    <div>
      <h3>{state.name}</h3>
      <img alt={state.name} className="RestImg" src={state.photograph} />
      <p>Address: {state.address}</p>
      <p>Cuisine: {state.cuisine_type}</p>

      <div className="Reviews">
        <h2>REVIEWS</h2>
        {state.reviews.map((v) => (
          <div className="Review">
            <p>name: {v.name}</p>
            <p>date: {v.date}</p>
            <p>rating: {v.rating}</p>
            <p>comments: {v.comments}</p>
          </div>
        ))}
      </div>

      <form onSubmit={sendFeedbackHandler}>
        <input placeholder="Your Name" ref={refName} />
        <textarea ref={refComment} placeholder="Comment"></textarea>
        <div>
          {Array(5)
            .fill()
            .map((_, index) => (
              <span
                key={index}
                className={index < rating ? "Star active" : "Star"}
                onClick={() => ratingClickHandler(index + 1)}
              >
                &#9733;
              </span>
            ))}
        </div>
        <div>
          <button type="submit">Click</button>
        </div>
      </form>
    </div>
  );
}
