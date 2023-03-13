import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import Navigat from './Components/Navigat/Navigat';


function App() {


  return (
    <>
    <Navigat/>
    <Routes>
      <Route path='/' element={ <div className="App"> Hello Yazid</div>}/>
      <Route path='/movielist' element={<MovieList/>}/>
      <Route path='/addmovie' element={<AddMovie/>}/>
    </Routes>
    </>
   
  );
}

export default App;