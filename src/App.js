
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Components/AddProducts/AddProducts';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import OneItem from './Components/OneItem/OneItem';
import Home from './Homepage/Home/Home';
import Item from './Homepage/Items/Item';
import Footer from './SharedComponents/Footer/Footer';

import Header from './SharedComponents/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/item' element={<Item></Item>}></Route>
        <Route path='/inventory/:id' element={<OneItem></OneItem>}></Route>
        <Route path='/inventory' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='/addProducts' element={<AddProducts></AddProducts>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
