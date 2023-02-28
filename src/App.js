import './App.css';
import Escena from './components/Escena/Escena'

function App() {
  const props = [
    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    "L'heroi va decidir travessar la porta que el portava a casa",
    "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
  ];
 const mostrar = () => props.map((element, index) => <p key={index}>{element}</p>);

  return (
    <div>
      <Escena param={mostrar()}/>
    </div>
  );
}



export default App;
