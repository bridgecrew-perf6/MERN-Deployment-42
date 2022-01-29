import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import './Main.Module.css'

const Main = () => {
  const [pirates, setPirates] = useState([]);

  //useHistory to let us route to individual pirate URL onclick
  const history = useHistory();

  //grabbing pirates from DB
  useEffect(() => {
    axios.get('http://localhost:8000/api/pirates')
      .then(res => {
        setPirates(res.data)
      })
      .catch(err => console.log(err))
  })

  //declaring function which lets us delete pirate on click
  const walkThePlank = deletedId => {
    axios.delete(`http://localhost:8000/api/pirates/${deletedId}`)
      .then(res => {
        console.log(res.data);
        setPirates(pirates.filter(pirate => pirate._id !== deletedId))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
    <div className='header'>
      <h1>Pirate Crew</h1> <button onClick={() => history.push("/pirate/new")}> Enlist Pirate </button>
      </div>
      <div style={{width: "1200px", padding: "25px", margin: "auto"}}>
      {
        pirates.sort((first, second) => {
          return first.name > second.name ? 1 : -1;
        })
          .map((pirates, idx) => {
            return (
            <div key={pirates._id} style={{marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
              <img src={pirates.url}  style={{ width: "10%" }}/>
              <h3> {pirates.name} </h3>
              {/* using history to push the route into the url */}
              <button onClick={() => history.push(`/${pirates._id}`)}> View Pirate</button>
              <button onClick={() => walkThePlank(pirates._id)}>Walk the Plank</button>
            </div>
            )
          })
      }
    </div>
    </div>
  )
};

export default Main;
