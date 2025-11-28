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
    <div>
      <h1>React App</h1>
      <p>Message: {message}</p>
      <p>Frontend is working!</p>
      <p>Code is updated!: 28/11/2025</p>
    </div>
  );
}