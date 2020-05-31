import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../Actions';

export default function SignUp() {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState()
    const [email,setEmail]=useState('')
    const [first,setFirst]=useState()
    const [last,setLast]=useState()
    const dispatch = useDispatch();
    const users = useSelector(state=>state.users)

    const Register=(event)=>{
        event.preventDefault()
        if(users.length===0){
            try {
                if(first.length>0&&last.length>0&&userName.length>0&&password.length>0&&email.length>0){
                    dispatch(addUser(first,last,userName,password,email))
                }
                else{
                    alert('looks like were missing some information')
                }
            } catch (error) {
                alert('Sorry, cannot submit empty fields')
            }
        }
        else{
            let UserNameIndex = users.findIndex(user => user[0].userName === userName)
            let UserEmailIndex = users.findIndex(user => user[0].email === email)
            console.log(UserNameIndex,UserEmailIndex);
            if(UserEmailIndex===-1&&UserNameIndex===-1){
                try {
                    if(first.length>0&&last.length>0&&userName.length>0&&password.length>0&&email.length>0){
                        dispatch(addUser(first,last,userName,password,email))
                    }
                    else{
                        alert('looks like were missing some information')
                    }
                } catch {
                    alert('Sorry, cannot submit empty fields')
                }
            }
            else{
                if(UserEmailIndex!==-1){
                    alert('Sorry it seems this Email is already registered\nPlease pick another one')
                }
                if(UserNameIndex!==-1){
                    alert('Sorry it seems this User Name is already in use\nPlease pick another one')
                }
            }

        }
    }

    return (
        <div className="Main">
        <h3>Please Sign Up</h3>
        <form className="Signup-Form" onSubmit={Register} autoComplete="off">
        <label className="Signup-Label">
            First Name: 
            <input className="Signup-Input" type="test" placeholder="First Name" pattern="[A-z]+" onChange={(e)=>{setFirst(e.target.value)}}/>
        </label>
        <label className="Signup-Label">
            Last Name: 
            <input className="Signup-Input" type="test" placeholder="Last Name" pattern="[A-z]+" onChange={(e)=>{setLast(e.target.value)}}/>
        </label>
        <label className="Signup-Label">
            User Name: 
            <input className="Signup-Input" type="text" placeholder="Atleast 3 characters" pattern=".{3,}" title="Minimum of 3 characters" onChange={(e)=>{setUserName(e.target.value)}}/>
        </label>
        <label className="Signup-Label">
            Password: 
            <input className="Signup-Input" type="password" placeholder="Atleast 8 characters" pattern=".{8,}" title="Minimum of 8 characters" onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <label className="Signup-Label">
            Email: 
            <input className="Signup-Input" type="email" placeholder="Jhon.Dou@example.com" pattern="[a-zA-Z0-9._!@#$%^&*()-+]+@[a-z0-9.-]+\.[a-z]{2,}$" title="example@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <input className="Button Cursor" type="submit" value="Submit"/>
        </form>
        </div>
    )
}