import './App.css';
import Header from './components/Header';
import GameList from './components/GameList';
import Game from './components/Game';
import Nav from './components/Nav';
import GameDetails from './components/GameDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gamelist" component={GameList} />
          <Route path="/gamedetails" component={GameDetails} />
          <Route paht="/gamedetails/:id" component={GameDetails}/>
        </Switch>

      </div>
    </Router>
  );
}
const Home =()=>(
  <div><h1>HOME</h1></div>
);

export default App;
