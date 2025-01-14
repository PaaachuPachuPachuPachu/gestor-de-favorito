import './App.css';
import Header from './components/Header';
import AgregarFavorito from './components/AgregarFavorito';
import Favoritos from './components/Favoritos';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
    //Definir el estado para los favoritos
    const [favoritos, setFavoritos] = useState([]);
    
    //Funcion para agregar un nuevo favorito
    const agregarFavorito = (nuevoFavorito) => {
      if (!nuevoFavorito.trim()) {
        alert("El favorito no puede estar vacìo.");
        return;
      }
      if (favoritos.includes(nuevoFavorito)) {
        alert("Este favorito ya està en la lista.");
        return;        
      }  
      setFavoritos([...favoritos, nuevoFavorito]);
    };

    const eliminarFavorito = (index) => {
      setFavoritos(favoritos.filter((_, i) => i !== index));
    };

  return (
    <div className="App">
      <header className="App-header">
        <Header totalFavoritos={favoritos.length} />
        <AgregarFavorito onAgregar={agregarFavorito} />
        <Favoritos items={favoritos} onEliminar={eliminarFavorito} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
