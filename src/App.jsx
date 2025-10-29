import './App.css';
import Cards from './components/cards/cards';
import { Routes, Route } from "react-router-dom";
import Detail from './components/detail/Detail';
import Nav from './components/nav/Nav';
import Form from './components/form/Fornm';
import Favorites from './components/favorites/Favorites';
import { Navigate } from 'react-router-dom';



function App() {
  return (
   <>
   <Nav />
    <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Cards/>}/>
      <Route path="/detail/:id" element={<Detail />}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
   </>
  );
}

export default App;
