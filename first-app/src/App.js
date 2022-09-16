import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap/dist/css/bootstrap.css"
import NavbarBoost from './components/NavbarBoost';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const titulo="Lista de productos"
  const counter=""
  return (
    <div className="App">
      <NavbarBoost/>
      <ItemListContainer greeting= "Bienvenidos a Mangareader!" titulo={titulo} counter={counter}/>
    </div>
    
  );
}
export default App;