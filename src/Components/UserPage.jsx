import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import UserSetting from './UserSetting';


export default function UserPage(props) {
    const users = useSelector(state=>state.users)
    const userIsLoggedIndex = useSelector(state=>state.userIndex)

    const Display=()=>{
        if(props.Settings==="General"){
            return(
                Object.entries(users[userIsLoggedIndex][0]).map(([key,value],i) =>{
                    return <UserSetting key={`general`+i} Property={key} Value={value}/>
                })
            )
        }
        else if(props.Settings==="Privacy"){
            return(
                Object.entries(users[userIsLoggedIndex][1]).map(([key,value],i) =>{
                    return <UserSetting key={`privacy`+i} Property={key} Value={value}/>
                })
            )
        }
        else if(props.Settings==="Payment"){
            return(
                Object.entries(users[userIsLoggedIndex][3]).map(([key,value],i) =>{
                    return <UserSetting key={`payment`+i} Property={key} Value={value}/>
                })
            )
        }
    }
    return (
        <div className="User-Settings Main">
            <div className="User-SideBar">
                <h1 className="User-link"><Link to={"/user="+users[userIsLoggedIndex][0].userName+"/settings=general"} className="Nav-link">General</Link></h1>
                <h1 className="User-link"><Link to={"/user="+users[userIsLoggedIndex][0].userName+"/settings=privacy"} className="Nav-link">Privacy</Link></h1>
                <h1 className="User-link"><Link to={"/user="+users[userIsLoggedIndex][0].userName+"/settings=payment"} className="Nav-link">Payment</Link></h1>
            </div>
            <div className="User-main">
                <h3>{props.Settings} Settings</h3>
                <hr/>
                <div className="Settings">
                    {Display()}
                </div>
            </div>
        </div>
    )
}

