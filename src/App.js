// import logo from './logo.svg';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Nav from './routes/navigation/nav.component';
import Authentication from './routes/authentication/authentication.components';
import ItemDetails from './Components/ItemDetails/item-details.component'
// import './routes/navigation/navigation.styles.scss';
import Shop from './routes/shop/shop.components'
import { Checkout } from './routes/checkout/checkout.components';



const SubShop = () => {
  return (
  <div>
    <p>2 This is the sub shop page</p>
  </div>
  ); 
}

const ItemDetailsTest = () => {
  return (
    <div>
      <p>This is the Item Details page</p>
    </div>
  );
}
 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}>
          <Route path='subshop' element={<SubShop />}/>
        </Route>
        <Route path='sign-in' element={<Authentication />}/>
        <Route path='item-details' element={<ItemDetails />}/> 
        <Route path='checkout' element={<Checkout />}/> 
      </Route>
    </Routes>
  );
} 

export default App;



