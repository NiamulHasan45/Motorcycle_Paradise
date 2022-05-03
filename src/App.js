
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Authentication/LogIn/LogIn';
import Registration from './Authentication/Registration/Registration';
import RequireAuth from './Authentication/RequireAuth/RequireAuth';
import AddProducts from './Components/AddProducts/AddProducts';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import MyItems from './Components/MyItems/MyItems';
import NotFound from './Components/NotFound/NotFound';
import OneItem from './Components/OneItem/OneItem';
import Home from './Homepage/Home/Home';
import Item from './Homepage/Items/Item';
import Footer from './SharedComponents/Footer/Footer';

import Header from './SharedComponents/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/item' element={<Item></Item>}></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <OneItem></OneItem>
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/addProducts' element={
          <RequireAuth>
            <AddProducts></AddProducts>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
