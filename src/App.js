import './App.css';
import Navbar from  './Components/Navbar';
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/all" component={AllUsers} exact />
        <Route path="/add" component={AddUser} exact />
        <Route path="/edit/:id" component={EditUser} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
