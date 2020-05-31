import React from 'react'
import Products from './Products'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export default function Cart() {
    const users = useSelector(state=>state.users)
    const userIsLoggedIndex = useSelector(state=>state.userIndex)
    const ProductsInCart = useSelector(state=>state.users[userIsLoggedIndex][2].cart)
    const CartSum = useSelector(state=>state.users[userIsLoggedIndex][2].cartSum)

    const display=()=>{
        if(CartSum===0){
            return <div>
                <h5>Your Cart is currently empty</h5>
                <button className="Button"><Link to="/" className="Nav-home">Continue Shopping</Link></button>
            </div>
        }
        else{
            return <div>
                {ProductsInCart.map((element,index)=>{return <Products 
                    key={"product"+index}
                    index={index} 
                    RemoveButton={true}
                    productData={element.ProductInfo}
                    amount={element.Amount}
                    pricing={element.Pricing}
                    stockAmount={element[1]}
                    imgData={element.Image}
                />})}
                <h5>Total: ${CartSum}</h5>
                <button className="Button"><Link to={"/checkout="+users[userIsLoggedIndex][0].userName} className="Nav-home">Proceed to Checkout</Link></button>
            </div>
        }
    }
    return ( <div className="productsPage Main">
        <h3>My Cart</h3>
        {display()}
    </div>)
}