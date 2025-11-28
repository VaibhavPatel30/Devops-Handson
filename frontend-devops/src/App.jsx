import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [message, setMessage] = useState('Loading...');


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/hello/greeting`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage('Error fetching message:' + error.message);
      });
  }, []);

  return (
    <div className="food-card">
      <div className="food-card__image-wrapper">
        <img
          src="./food.jpg"
          alt="Food outlet"
          className="food-card__image"
        />
        <div className="food-card__badge">Flat 30% OFF</div>
      </div>

      <div className="food-card__body">
        <div className="food-card__header">
          <h2 className="food-card__title">Fresh Fruit Delight</h2>
          <span className="food-card__rating">
            ★ 4.5
          </span>
        </div>

        <p className="food-card__cuisine">
          North Indian • Street Food • Fresh Fruit
        </p>

        <p className="food-card__meta">
          25–35 mins • 3.5 km • ₹200 for two
        </p>

        <p className="food-card__offer">
          Free delivery on orders above ₹299
        </p>

        <div className="food-card__footer">
          <div className="food-card__tags">
            <span className="food-card__tag">Pure Veg</span>
            <span className="food-card__tag">Open till 11:30 PM</span>
          </div>
          <button className="food-card__button">
            View Menu
          </button>
        </div>
      </div>
      <h3>Hello, Hardavi kevu lagiyu</h3>
    </div>
  );
}