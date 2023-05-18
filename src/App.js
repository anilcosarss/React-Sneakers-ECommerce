import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ShoesList from './Components/ShoesList';
import ShoeDetail from './Components/ShoeDetail';
import Basket from './Components/Basket';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<ShoesList/>} />
      <Route path='/shoes/:id' element={<ShoeDetail/>} />
      <Route path='/basket' element={<Basket/>}/>
      <Route/>
    </Routes>
    <Footer/>

    </>
  );
}

export default App;
