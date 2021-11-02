
import './App.css';

import  NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">

    <NavBar />

    <ItemListContainer saludo= 'Item list container :)' />   
    </div>

  );
}
  

export default App;
