import React from 'react'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import ProductsPage from './Components/ProductsPage'
import Cart from './Components/Cart';
import UserCart from './Components/UserCart';
import SignUp from './Components/SignUp'
import Login from './Components/Login';
import UserPage from './Components/UserPage';
import SpecificProduct from './Components/SpecificProduct';
import Footer from './Components/Footer';
import About from './Components/About';
import Checkout from './Components/Checkout';
import { useSelector } from 'react-redux'




export default function App() {

  const users = useSelector(state=>state.users)
  const isLogged = useSelector(state=>state.isLogged)
  const ProductList = useSelector(state=>state.ProductList)

  const PrivateRoute = ({component: Component})=> (
    <Route render={()=>(
      isLogged===true? <Component/> : <Redirect to="/login" />
    )}/>
    )
  return (
    <div className="App">
      <Router>
      <Header/> {/*The Header is permenant, so it is not wraped by Switch*/}
      <Switch>
      <Route exact path="/" component={()=>{return <ProductsPage />}}/>
      <Route exact path="/cart" component={()=>{return <Cart/>
      }}/>
      <Route exact path="/signup" component={()=>{return <SignUp/>
      }}/>
      <Route exact path="/login" component={()=>{return <Login/>
      }}/>
      <Route exact path="/about" component={()=>{return <About/>
      }}/>
      {ProductList.map((Product,index)=>{
        return <Route exact path={"/product="+Product[0].id} key={"Product"+index} component={()=>{
          return <SpecificProduct productData={Product[0]} AddButton={true} pricing={Product[2]} imgData={Product[3]}/>}}/>
      })}
      {users.map((user,index)=>{
        return <PrivateRoute exact path={"/user="+user[0].userName} key={"user"+index} component={()=>{return <UserPage Settings={"General"}/>}}/>
      })}
      {users.map((user,index)=>{
        return <PrivateRoute exact path={"/user="+user[0].userName+"/settings=general"} key={"user"+index} component={()=>{return <UserPage Settings={"General"}/>}}/>
      })}
      {users.map((user,index)=>{
        return <PrivateRoute exact path={"/user="+user[0].userName+"/settings=privacy"} key={"user"+index} component={()=>{return <UserPage Settings={"Privacy"}/>}}/>
      })}
      {users.map((user,index)=>{
        return <PrivateRoute exact path={"/user="+user[0].userName+"/settings=payment"} key={"user"+index} component={()=>{return <UserPage Settings={"Payment"}/>}}/>
      })}
      {users.map((user,index)=>{
        return <PrivateRoute exact path={"/cart="+user[0].userName} key={"userCart"+index} component={()=>{return <UserCart/>}}/>
      })}
      {users.map((user,index)=>{
        return <PrivateRoute exact path={"/checkout="+user[0].userName} key={"userCheckout"+index} component={()=>{return <Checkout/>}}/>
      })}
      </Switch>
      <Footer/>
      </Router>
    </div>
)
}