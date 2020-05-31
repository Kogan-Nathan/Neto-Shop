import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addNewProduct,
     addExistProduct, 
     decrementExistProduct, 
     removeProductFromCart, 
     decreaseStock, 
     increaseStock, 
     UpdateShipping, 
     animationOn, 
     animationOff} from '../Actions';


export default function Products(props) {
    const dispatch = useDispatch();
    const users = useSelector(state=>state.users)
    const userIsLoggedIndex = useSelector(state=>state.userIndex)
    const ProductList = useSelector(state=>state.ProductList)
    const inStockProductIndex = ProductList.findIndex(product => product[0].id === props.productData.id)

    const animationStop=()=>{
        dispatch(animationOff())
    }
    const addProductToCart=(event)=>{
        event.preventDefault()
        if(ProductList[inStockProductIndex][1].inStock!==0){
            try {
                if(users[userIsLoggedIndex][2].cart.length===0){
                    dispatch(decreaseStock(inStockProductIndex))
                    dispatch(addNewProduct(userIsLoggedIndex,props.productData,props.pricing,props.imgData))
                    dispatch(animationOn())
                    setTimeout(function(){ animationStop() }, 1000);
                    dispatch(UpdateShipping(userIsLoggedIndex))
                }
                else{
                    let inCartProductIndex = users[userIsLoggedIndex][2].cart.findIndex(product => product.ProductInfo.id === props.productData.id)
                    try {
                        if(users[userIsLoggedIndex][2].cart[inCartProductIndex].ProductInfo.id===props.productData.id){
                            dispatch(addExistProduct(userIsLoggedIndex,inCartProductIndex))
                            dispatch(animationOn())
                            setTimeout(function(){ animationStop() }, 1000);
                            dispatch(UpdateShipping(userIsLoggedIndex))
                            dispatch(decreaseStock(inStockProductIndex))
                        }
                    } 
                    catch {
                        dispatch(addNewProduct(userIsLoggedIndex,props.productData,props.pricing,props.imgData))
                        dispatch(animationOn())
                        setTimeout(function(){ animationStop() }, 1000);
                        dispatch(UpdateShipping(userIsLoggedIndex))
                        dispatch(decreaseStock(inStockProductIndex))
                    }
                }            
            } catch {
                alert('Please log in')
            }    
        }
        else{
            alert('Sorry, it seems we are out of stock')
        }
    }
    
    const incrementAmount=(event)=>{
        event.preventDefault()
        if(ProductList[inStockProductIndex][1].inStock!==0){
            let inCartProductIndex = users[userIsLoggedIndex][2].cart.findIndex(product => product.ProductInfo.id === props.productData.id)
            dispatch(addExistProduct(userIsLoggedIndex,inCartProductIndex))
            dispatch(UpdateShipping(userIsLoggedIndex))
            dispatch(decreaseStock(inStockProductIndex))
        }
        else{
            alert('Sorry, it seems we are out of stock')
        }
    }
    
    const decrementAmount=(event)=>{
        event.preventDefault()
        let inCartProductIndex = users[userIsLoggedIndex][2].cart.findIndex(product => product.ProductInfo.id === props.productData.id)
        if(users[userIsLoggedIndex][2].cart[inCartProductIndex].Amount>=2){
            dispatch(decrementExistProduct(userIsLoggedIndex,inCartProductIndex))
            dispatch(UpdateShipping(userIsLoggedIndex))
            dispatch(increaseStock(inStockProductIndex))
        }
        else{
            dispatch(removeProductFromCart(userIsLoggedIndex,inCartProductIndex))
            dispatch(UpdateShipping(userIsLoggedIndex))
            dispatch(increaseStock(inStockProductIndex))
        }
    }

    const DealPrice=()=>{
        if(props.pricing.deal===true){
            return(
                <span className="Product-Price"> Deal Price = ${props.pricing.dealPrice}</span>
            )
        }
        else{
            return(
                <span className="Product-Price"> Price = ${props.pricing.price} </span>
            )
        }
    }

    return (
        <Link to={"/product="+props.productData.id} className="Nav-home container">
        <div className="card">
            <div className="Slide">
                <div className="Deal-container">
                    <img className="Product-img" src={props.imgData.img1} alt={props.imgData.alt1}/>
                    {props.pricing.deal? <div className="Deal"><p>{props.pricing.dealDiscount}% Off</p></div> : ''}
                </div>
            </div>
            <div className="Product-container">
                <strong>{props.productData.brand} </strong><span className="Prodcut-Name">- {props.productData.series} {props.productData.model} {props.productData.type}</span><br/>
                <span className="Product-Size">{props.productData.size}</span><br/>
                {DealPrice()}<br/>
                {props.AddButton? <button 
                    className="Button" 
                    onClick={addProductToCart}
                    >Add To Cart</button> : ''
                }
                {props.RemoveButton? <div className="Product-Amount">Amount: <button onClick={decrementAmount} className="Amount-Button Cursor Button">-</button>
                    <span> {props.amount} pcs</span>
                    <button onClick={incrementAmount} className="Amount-Button Cursor Button">+</button>
                    </div> : ''
                }
            </div>
        </div>
        </Link>
    )
}
