import Saludo from './Saludo';
//import NavBar from './components/NavBar';

function App() {
  
  return (
  <div>
    <h1>Bienvenido al mundo de React </h1>
    <Saludo nombre="Tania" edad={31}/>
    <p className='bg-sky-50'>verde</p>
  </div>
  );
}

export default App
