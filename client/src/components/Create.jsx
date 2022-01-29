import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [treasure, setTreasure] = useState(0);
  const [phrase, setPhrase] = useState("");
  const [position, setPosition] = useState("Captain");
  const [pegleg, setPegleg] = useState(true);
  const [eyepatch, setEyepatch] = useState(true);
  const [hookhand, setHookhand] = useState(true);

  //setting up errors from backend
  const [error, setError] = useState([]);

  //front end error handling
  const [nameError, setNameError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [phraseError, setPhraseError] = useState("");


  let history = useHistory();


  const enlistPirate = e => {
    e.preventDefault();

    const newPirate = {
      name: name,
      url: url,
      treasure: treasure,
      phrase: phrase,
      position: position,
      pegleg: pegleg,
      eyepatch: eyepatch,
      hookhand: hookhand
    }

    axios.post("http://localhost:8000/api/pirates", newPirate)
      .then(res => {
        console.log(res.data);
        console.log("success creating a pirate!");
        history.push("/")
      })
      .catch(err => {
        console.log("could not create enlist pirate");
        console.log(err.response.data);
        const { errors } = err.response.data.error;
        const messages = Object.keys(errors).map(error => errors[error].message)
        console.log(messages)
        setError(messages)
      })
  }



  return <div>
    <div className="header">    <h1>Let's enlist a pirate!</h1> <button onClick={() => history.push("/pirates")}> Crew Board </button></div>

    <form onSubmit={enlistPirate}>

      <div className="form">
        Pirate's name:
        <input type="text" onChange={e => setName(e.target.value)} value={name} />
        {
          name.length < 1 ?
            <p style={{ color: "red" }} > Please Provide a name!</p> : <> &nbsp; </>//add empty space character inside p tag
        }
        <br />

        URL to a picture of this pirate:
        <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
        {
          url.length < 1 ?
            <p style={{ color: "red" }} > Please provide a URL!! </p> : <> &nbsp; </>
        }
        <br />

        How many treasure chests does this pirate have?
        <input type="number" min="0" onChange={e => setTreasure(e.target.value)} value={treasure} /> <br />

        Pirate phrase (or joke!):
        <input type="text" onChange={e => setPhrase(e.target.value)} value={phrase} />
        {
          phrase.length < 1 ?
            <p style={{ color: "red" }} > Please provide a phrase or joke! </p> : <> &nbsp; </>
        }
        <br />

        Crew position:
        <select onChange={e => setPosition(e.target.value)} value={position}>
          <option value="Captain">Captain</option>
          <option value="First Mate">First Mate</option>
          <option value="Quartermaster">Quartermaster</option>
          <option value="Boatswain">Boatswain</option>
          <option value="Powder Monkey">PowderMonkey</option>
        </select>

        <br />
        Peg Leg?
        <input type="checkbox" onChange={e => setPegleg(e.target.checked)} checked={pegleg} /> <br />

        Eye Patch?
        <input type="checkbox" onChange={e => setEyepatch(e.target.checked)} checked={eyepatch} /> <br />

        Hook Hand?
        <input type="checkbox" onChange={e => setHookhand(e.target.checked)} checked={hookhand} /> <br />
        {error.map((error, idx) => {
          return <p key={idx}> {error} </p>
        })}
        <button>Submit</button>
      </div>
    </form>
  </div>
};

export default Create;
