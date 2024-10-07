
import "./App.css"; // Estilos globales
import "./components/Header/Header.css"; // Estilos del Header
import "./components/Footer/Footer.css"; // Estilos del Footer
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer'; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import imagen1 from "./assets/bg.jpg";
import imagen2 from "./assets/adorable-baby.png";

function App() {
  // Variables saludo y autor
  const saludo = "¡Bienvenidos a nuestra tienda!";
  const autor = "Dino te espera para jugar";

  return (
    <>
      {/* El Header siempre estará visible */}
      <Header />

      {/* Main content */}
      <main>
        <div className="App">
          <ItemListContainer
            saludo={saludo}
            autor={autor}
            imagen1={imagen1}
            imagen2={imagen2}
          />
        </div>
      </main>

      {/* El Footer siempre estará visible */}
      <Footer />
    </>
  );
}

export default App;