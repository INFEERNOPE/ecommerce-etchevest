import './App.css';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavbarBoost from './components/NavbarBoost';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavbarBoost/>
    </div>
  );
}

export default App;