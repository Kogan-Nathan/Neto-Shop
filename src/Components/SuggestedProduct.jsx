import React from 'react'
import {Link} from 'react-router-dom'

export default function Products(props) {

    return (
        <Link to={"/product="+props.productData.id} className="Nav-home container">
        <div className="card">
            <img className=" Suggested-Product-img" src={props.imgData.img1} alt={props.imgData.alt1}/>
            <div className="Product-container">
                <strong>{props.productData.brand} </strong><span className="Prodcut-Name">- {props.productData.series} {props.productData.model} {props.productData.type}</span><br/>
                <span className="Product-Size">{props.productData.size}</span>
            </div>
        </div>
        </Link>
    )
}
