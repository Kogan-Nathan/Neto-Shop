import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShippingAd from './ShippingAd'

export default function Checkout() {
    const users = useSelector(state=>state.users)
    const userIsLoggedIndex = useSelector(state=>state.userIndex)
    const CartSum = useSelector(state=>state.users[userIsLoggedIndex][2].cartSum)
    const ShippingCosts = useSelector(state=>state.users[userIsLoggedIndex][2].shipping)

    const returnValue=(state)=>{
        if(state===""){
            return (
                <span className="Product-Limited">No information found</span>
            )
        }
        else{
            return state            
        }
    }

    const checkForm=()=>{
        let valid=true;
        let state1=Object.entries(users[userIsLoggedIndex][1]).map(([key,value],i) =>{return (value)})
        let state2=Object.entries(users[userIsLoggedIndex][3]).map(([key,value],i) =>{return (value)})
        for (let index = 0; index < state1.length; index++) {
            if(state1[index]===""){
                valid=false
                alert('Missing Shipping information')
                return
            }
        }
        for (let index = 0; index < state2.length; index++) {
            if(state2[index]===""){
                valid=false
                alert('Missing Payment information')
                return
            }
        }
        if(valid){
            alert("This is as far as the demonstration is going\nThank you for your time")
        }
    }

    return (
        <div className="Main">
            <div className="Product">
                <div className="card flex container">
                    <h3>Shipping Information</h3>
                    <hr className="User-Border"/>
                    <p><strong>Street Address:</strong> {returnValue(users[userIsLoggedIndex][1].streetAddress)}</p>
                    <p><strong>City:</strong> {returnValue(users[userIsLoggedIndex][1].city)}</p>
                    <p><strong>State:</strong> {returnValue(users[userIsLoggedIndex][1].state)}</p>
                    <p><strong>Postal:</strong> {returnValue(users[userIsLoggedIndex][1].postal)}</p>
                    <p><strong>Country:</strong> {returnValue(users[userIsLoggedIndex][1].country)}</p>
                    <button className="Button"><Link to={"/user="+users[userIsLoggedIndex][0].userName+"/settings=privacy"} className="Nav-home">Update</Link></button>
                </div> 
                <div className="card flex container">
                    <h3>Payment Information</h3>
                    <hr className="User-Border"/>
                    <p><strong>Name on Card:</strong> {returnValue(users[userIsLoggedIndex][3].nameOnCard)}</p>
                    <p><strong>Credit Card Number:</strong> {returnValue(users[userIsLoggedIndex][3].creditCardNumber)}</p>
                    <p><strong>exp Month:</strong> {returnValue(users[userIsLoggedIndex][3].expMonth)}</p>
                    <p><strong>exp Year:</strong> {returnValue(users[userIsLoggedIndex][3].expYear)}</p>
                    <p><strong>cvv:</strong> {returnValue(users[userIsLoggedIndex][3].cvv)}</p>
                    <button className="Button"><Link to={"/user="+users[userIsLoggedIndex][0].userName+"/settings=payment"} className="Nav-home">Update</Link></button>
                </div>
            </div>
            <ShippingAd/>
            <div className="card flex container">
                <p><strong>Your carts total sum is:</strong> ${CartSum}</p>
                <p><strong>Your shipping costs are:</strong> ${ShippingCosts}</p>
                <p><strong>Total payment price is:</strong> ${ShippingCosts+CartSum}</p>
                <button className="Button" onClick={checkForm}>Complete Checkout</button>
            </div>
        </div>
    )
}

