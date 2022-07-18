import Search from './Search';
import BookDetails from './BookDetails';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'> <Search /> </Route>
          <Route path='/:title'> <BookDetails /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
