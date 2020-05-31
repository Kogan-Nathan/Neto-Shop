import React from 'react'
import Products from './Products'
import ShippingAd from './ShippingAd'
import { useSelector } from 'react-redux'

export default function ProductsPage() {

    const ProductList = useSelector(state=>state.ProductList)

    return (
        <div className="productsPage Main">
        <ShippingAd/>
        <h3>Check Out Our Products</h3>
        {ProductList.map((element,index)=>{return <Products 
        key={"product"+index}
        AddButton={true}
        productData={element[0]}
        pricing={element[2]}
        imgData={element[3]}
        />})}
    </div>
)
}
