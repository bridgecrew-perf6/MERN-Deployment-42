import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import ViewOne from './components/ViewOne';
import Create from './components/Create';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* READ ALL */}
      <Route exact path="/">
        <Main />
      </Route>

      {/* Redirects path back to main page */}
      <Route exact path="/pirates">
        <Redirect to="/" />
      </Route>

      {/* CREATE */}
      <Route exact path="/pirate/new">
        <Create />
      </Route>

      {/* READ ONE */}
      <Route exact path="/:id">
        <ViewOne />
      </Route>

    </div>
  );
}

export default App;
