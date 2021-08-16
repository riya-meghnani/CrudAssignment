import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router> <Dashboard></Dashboard></Router>
   
  );
}

export default App;
// mongodb+srv://crudproject:<password>@cluster0.kx8vb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority