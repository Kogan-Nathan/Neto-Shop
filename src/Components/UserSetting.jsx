import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { UpdateFirstName, UpdateLasttName, UpdateUserName, UpdateEmail,
UpdatePassword, UpdateStreet, UpdateCity, UpdateState, UpdatePostal, UpdateCountry,
UpdateNameOnCard, UpdateCredit, UpdateExpMonth, UpdateExpYear, UpdateCVV } from '../Actions';


export default function UserSetting(props) {
    const dispatch = useDispatch();
    const users = useSelector(state=>state.users)
    const userIsLoggedIndex = useSelector(state=>state.userIndex)
    const [input, setInput]=useState(props.Value)
    const [name, setName]=useState(false)

    const toggleClass=()=>{
        setName(!name)
    }

    const verifyAndSubmit=()=>{
        try {
            if(input.length>1){
                if(props.Property==="firstName"){
                    dispatch(UpdateFirstName(userIsLoggedIndex,input))
                }
                else if(props.Property==="lastName"){
                    dispatch(UpdateLasttName(userIsLoggedIndex,input))
                }
                else if(props.Property==="userName"){
                    let UserIndex = users.findIndex(user => user[0].userName === input)
                    if(users[UserIndex][0].userName===input){
                        alert('This User Name is already taken\nPlease try another')
                        return
                    }
                    else{
                        dispatch(UpdateUserName(userIsLoggedIndex,input))
                    }
                }
                else if(props.Property==="email"){
                    let UserIndex = users.findIndex(user => user[0].email === input)
                    if(users[UserIndex][0].email===input){
                        alert('This E-mail is already Registered\nPlease try another')
                        return
                    }
                    else{
                        dispatch(UpdateEmail(userIsLoggedIndex,input))
                    }
                }
                else if(props.Property==="password"){
                    dispatch(UpdatePassword(userIsLoggedIndex,input))
                }
                else if(props.Property==="streetAddress"){
                    dispatch(UpdateStreet(userIsLoggedIndex,input))
                }
                else if(props.Property==="city"){
                    dispatch(UpdateCity(userIsLoggedIndex,input))
                }
                else if(props.Property==="state"){
                    dispatch(UpdateState(userIsLoggedIndex,input))
                }
                else if(props.Property==="postal"){
                    dispatch(UpdatePostal(userIsLoggedIndex,input))
                }
                else if(props.Property==="country"){
                    dispatch(UpdateCountry(userIsLoggedIndex,input))
                }
                else if(props.Property==="nameOnCard"){
                    dispatch(UpdateNameOnCard(userIsLoggedIndex,input))
                }
                else if(props.Property==="creditCardNumber"){
                    dispatch(UpdateCredit(userIsLoggedIndex,input))
                }
                else if(props.Property==="expMonth"){
                    dispatch(UpdateExpMonth(userIsLoggedIndex,input))
                }
                else if(props.Property==="expYear"){
                    dispatch(UpdateExpYear(userIsLoggedIndex,input))
                }
                else if(props.Property==="cvv"){
                    if(input.length!==3){
                        alert('CVV Number must contain 3 numbers')
                        return
                    }
                    else{
                        dispatch(UpdateCVV(userIsLoggedIndex,input))
                    }
                }
            }
        } catch (error) {
            console.log(error);
            
            alert('Sorry, You can`t submit empty fields')            
        }
        setName(!name)
    }

    const seperateWords=(str)=>{
        let index=0;
        while (index<=str.length) {
            if (str.charAt(index)>='A'&&str.charAt(index)<='Z') {
                str = str.slice(0,index)+' '+str.slice(index, str.length);
                index++
            }
            index++
        }
        str=str.charAt(0).toUpperCase()+str.slice(1)
        return str
    }

    const returnValue=()=>{
        if(props.Property==="password"){
            if (name) {
                return "text"                
            }
            else{
                return "password"
            }
        }
        else{
            return "text"
        }

    }

    return (
        <div>
            <div className="Row">
                <div className="Footer-Content Content">
                    <div className="Strong">{seperateWords(props.Property)}</div>
                    <div className="Faint">
                        <input className="Signup-Input" type={returnValue()} disabled={!name} onChange={(e)=>{setInput(e.target.value)}} value={input}/>
                    </div>
                </div>
                {name? 
                    <button className="Button Side" onClick={verifyAndSubmit}>Update</button>
                    : <button className="Button Side" onClick={toggleClass}>Edit</button>
                }
            </div><hr className="User-Border"/>
        </div>
    )
}


