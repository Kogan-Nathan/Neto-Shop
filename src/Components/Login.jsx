import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isLogged, userIndex } from '../Actions';
import {Link} from 'react-router-dom'

export default function Login() {
    const [password,setPassword]=useState()
    const [email,setEmail]=useState()
    const dispatch = useDispatch();
    const users = useSelector(state=>state.users)
    const userIsLoggedIndex = useSelector(state=>state.userIndex)
    const userIsLogged = useSelector(state=>state.isLogged)

    const LogIn=(event)=>{
        event.preventDefault()
        if(users.length===0){
            alert('No matches found')
        }
        else{
            let UserIndex = users.findIndex(user => user[0].email === email)
            try {
                if(users[UserIndex][0].email===email&&users[UserIndex][1].password===password){
                    dispatch(isLogged());
                    dispatch(userIndex(UserIndex))
                }
                else{
                    alert("wrong Password")
                }
            } 
            catch {
                alert('Sorry, wrong Email')
            }
        }

    }

    return (
        <div className="Main">
            {userIsLogged? <div>
                <h3>You are logged in as {users[userIsLoggedIndex][0].userName}</h3>
                <Link to="/"><button className="Button Cursor">Continue Shopping</button></Link>
                <Link to={"/user="+users[userIsLoggedIndex][0].userName}><button className="Button Cursor">Check Profile</button></Link>
            </div> : <div>
                <h3>Please Log In</h3>
                <form className="Signup-Form" onSubmit={LogIn} autoComplete="off">
                <label className="Signup-Label">
                    Email:
                    <input className="Signup-Input" type="email" placeholder="Jhon.Dou@example.com" pattern="[a-zA-Z0-9._!@#$%^&*()-+]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>
                <label className="Signup-Label">
                    Password: 
                    <input className="Signup-Input" type="password" placeholder="Atleast 8 characters" pattern=".{8,}" onChange={(e)=>{setPassword(e.target.value)}}/>
                </label>
                <input className="Button Cursor" type="submit" value="Submit"/>
                </form>
            </div>}
        </div>
    )

}
