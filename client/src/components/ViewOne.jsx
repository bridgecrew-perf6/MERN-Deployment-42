import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import "./ViewOne.module.css"

const ViewOne = () => {

  //grab variable name from URL (:id)
  const { id } = useParams();

  const [thisPirate, setThisPirate] = useState({})

  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pirates/${id}`)
      .then(res => {
        console.log(res.data);
        setThisPirate(res.data);
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <>
      <div className='header'>
        <h2>
          {thisPirate.name}
        </h2>
        <button onClick={() => history.push("/pirates")}> Crew Board </button></div>


      <div className='viewOneContainer' style={{display: "flex", width: "800px", margin: "auto", padding: "20px"}}>

        <div className='picture'>
        <img src={thisPirate.url}  style={{ width: "50%" }}/>
          <h3>
            "{thisPirate.phrase}"
          </h3>
        </div>

          <div className='about' >
            <h3>About</h3>
          <p>
            Position: {thisPirate.position}
          </p>
          <p>
            Number of treasure chests: {thisPirate.treasure}
          </p>
          Pegleg: &nbsp;
          {
            thisPirate.pegleg ?
              <>Yes</> : <>No</>
          }
          <br />
          Hookhand: &nbsp;
          {
            thisPirate.hookhand ?
              <>Yes</> : <>No</>
          }
          <br />
          Eyepatch: &nbsp;
          {
            thisPirate.eyepatch ?
              <>Yes</> : <>No</>
          }
          <br />
        </div>

      </div>

    </>)
};

export default ViewOne;
