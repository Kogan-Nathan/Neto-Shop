import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewProduct, 
    addExistProduct, 
    decreaseStock, 
    UpdateShipping,
    animationOn, 
    animationOff} from '../Actions';
import SuggestedProduct from './SuggestedProduct'


export default function SpecificProduct(props) {
    const [slideIndex,setSlideIndex]=useState({slideIndex:1,dot1:"dot active",dot2:"dot"})
    const [SuggestedProducts,setSuggestedProducts]=useState([])
    const [firstRender,setfirstRender]=useState(true)
    
    const dispatch = useDispatch();
    const users = useSelector(state=>state.users)
    const userIsLoggedIndex = useSelector(state=>state.userIndex)
    const ProductList = useSelector(state=>state.ProductList)
    const inStockProductIndex = ProductList.findIndex(product => product[0].id === props.productData.id)

    const generate=()=>{
        if(firstRender){
            let CloneProductsList = [...ProductList]
            let TempProducts = CloneProductsList.filter(product => product[0].id!==props.productData.id)
            let max = TempProducts.length,index,temp
            while(max){
                index=Math.floor(Math.random()*max--);
                temp=TempProducts[max];
                TempProducts[max]=TempProducts[index];
                TempProducts[index]=temp
                setSuggestedProducts(TempProducts.slice(0,3));
            }
            setfirstRender(false)
        }
    }

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
                        dispatch(addNewProduct(userIsLoggedIndex,props.productData,props.pricing,props.img1Data))
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

    const Carousel=()=>{
        if (slideIndex.slideIndex===1) {
            if(props.pricing.deal){
                return(
                    <div className="Slide">
                        <div className="Deal-container">
                            <img className="Product-img" src={props.imgData.img1} alt={props.imgData.alt1}/>
                            <div className="Deal">
                                <p>
                                    {props.pricing.dealDiscount}% Off
                                </p>
                            </div>
                        </div>
                        <div>
                            <span className={slideIndex.dot1} onClick={()=>setSlideIndex({slideIndex:1,dot1:"dot active",dot2:"dot"})}></span>
                            <span className={slideIndex.dot2} onClick={()=>setSlideIndex({slideIndex:2,dot1:"dot",dot2:"dot active"})}></span>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div className="Slide">
                        <img className="Product-img" src={props.imgData.img1} alt={props.imgData.alt1}/>
                        <div>
                            <span className={slideIndex.dot1} onClick={()=>setSlideIndex({slideIndex:1,dot1:"dot active",dot2:"dot"})}></span>
                            <span className={slideIndex.dot2} onClick={()=>setSlideIndex({slideIndex:2,dot1:"dot",dot2:"dot active"})}></span>
                        </div>
                    </div>
                )
            }  
        }
        else{
            if(props.pricing.deal){
                return(
                    <div className="Slide">
                        <div className="Deal-container">
                            <img className="Product-img" src={props.imgData.img2} alt={props.imgData.alt2}/>
                            <div className="Deal">
                                <p>
                                    {props.pricing.dealDiscount}% Off
                                </p>
                            </div>
                        </div>
                        <div>
                            <span className={slideIndex.dot1} onClick={()=>setSlideIndex({slideIndex:1,dot1:"dot active",dot2:"dot"})}></span>
                            <span className={slideIndex.dot2} onClick={()=>setSlideIndex({slideIndex:2,dot1:"dot",dot2:"dot active"})}></span>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div className="Slide">
                        <img className="Product-img" src={props.imgData.img2} alt={props.imgData.alt2}/>
                        <div>
                            <span className={slideIndex.dot1} onClick={()=>setSlideIndex({slideIndex:1,dot1:"dot active",dot2:"dot"})}></span>
                            <span className={slideIndex.dot2} onClick={()=>setSlideIndex({slideIndex:2,dot1:"dot",dot2:"dot active"})}></span>
                        </div>
                    </div>
                )
            }
        }
    }

    const Limited=()=>{
        if (ProductList[inStockProductIndex][1].inStock<=5) {
            return(
                <div>
                    <span className="Product-Size">{props.productData.size}</span>
                    <p className="Product-Limited">Hurry up! We're almost out of stock</p>
                </div>
            )      
        }
        else{
            return(
                <div>
                    <span className="Product-Size">{props.productData.size}</span><br/>
                </div>
            )
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
        <div className="Main" onLoad={generate()}>
            <div className="Product Specific">
                <div className="card Inline">
                    {Carousel()}
                    
                </div>
                <div className="Product-Description">
                    <strong className="Product-Brand">{props.productData.brand} </strong>
                    <span className="Prodcut-Name">{props.productData.series} {props.productData.model} {props.productData.type}</span>
                    {Limited()}
                    {DealPrice()}
                    {props.AddButton? <button className="Button" 
                        onClick={addProductToCart}>Add To Cart
                        </button> : ''}
                </div>
            </div>
            <div className="Suggested">
                <h3>Check out other Products aswell</h3>
                {SuggestedProducts.map((element,index)=>{return <SuggestedProduct 
                key={"SuggestedProduct"+index}
                productData={element[0]}
                pricing={element[2]}
                imgData={element[3]}
                />})}
            </div>
        </div>
    )
}
