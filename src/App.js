

import  NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';




function App() {
  return (
    <div className="App">

    <NavBar />

    <ItemListContainer saludo= 'Item list container :)' />   
    </div>

  );
}
  

export default App;
