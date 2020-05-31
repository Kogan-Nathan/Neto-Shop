const addUserReduer = (state = [[{firstName:"john",lastName:"doe",userName:"jojo",email:"youremail@gmail.com"},{password:"123456789",streetAddress:"",city:"",state:"",postal:"",country:""},{cart:[],cartSum:0,shipping:25},{nameOnCard:"",creditCardNumber:"",expMonth:"",expYear:"",cvv:""}]], action)=> {
    switch (action.type) {
        case 'addUser':
            return state=[[{firstName:action.firstNameData,lastName:action.lastNameData,
                userName:action.userNameData,email:action.emailData},
                {password:action.passwordData,streetAddress:"",
                city:"",state:"",
                postal:"",country:""},
                {cart:[],cartSum:0,shipping:"free"},{nameOnCard:"",creditCardNumber:"",
                expMonth:"",expYear:"",cvv:""}]
                ,...state] 
        case 'addNewProduct':
            state[action.userIndexData][2].cart=[{ProductInfo:action.productData,Pricing:action.pricingData,Amount:action.productAmountData,Image:action.imgData},...state[action.userIndexData][2].cart]                
            if (action.pricingData.deal) {
                state[action.userIndexData][2].cartSum=state[action.userIndexData][2].cartSum+action.pricingData.dealPrice            
            }
            else{
                state[action.userIndexData][2].cartSum=state[action.userIndexData][2].cartSum+action.pricingData.price
            }
            return state=[...state]
        case 'addExistProduct':
            state[action.userIndexData][2].cart[action.productIndexData].Amount++
            if (state[action.userIndexData][2].cart[action.productIndexData].Pricing.deal) {
                state[action.userIndexData][2].cartSum=state[action.userIndexData][2].cartSum+state[action.userIndexData][2].cart[action.productIndexData].Pricing.dealPrice                
            }
            else{
                state[action.userIndexData][2].cartSum=state[action.userIndexData][2].cartSum+state[action.userIndexData][2].cart[action.productIndexData].Pricing.price
            }
            return state=[...state]
        case 'decrementExistProduct':
            state[action.userIndexData][2].cart[action.productIndexData].Amount--
            if (state[action.userIndexData][2].cart[action.productIndexData].Pricing.deal) {
                state[action.userIndexData][2].cartSum=state[action.userIndexData][2].cartSum-state[action.userIndexData][2].cart[action.productIndexData].Pricing.dealPrice                
            }
            else{
                state[action.userIndexData][2].cartSum=state[action.userIndexData][2].cartSum-state[action.userIndexData][2].cart[action.productIndexData].Pricing.price
            }
            return state=[...state]
        case 'removeProductFromCart':
            if (state[action.userIndexData][2].cart[action.productIndexData].Pricing.deal){
                state[action.userIndexData][2].cartSum=state[action.userIndexData][2].cartSum-state[action.userIndexData][2].cart[action.productIndexData].Pricing.dealPrice                
            }
            else{
                state[action.userIndexData][2].cartSum=state[action.userIndexData][2].cartSum-state[action.userIndexData][2].cart[action.productIndexData].Pricing.price
            }
            let temp = state[action.userIndexData][2].cart.filter((value,index)=>(index!==action.productIndexData));
            state[action.userIndexData][2].cart=temp
            return state=[...state]
        case 'updateFirstName':
            state[action.userIndexData][0].firstName=action.InputData
            return state=[...state]
        case 'updateLastName':
            state[action.userIndexData][0].LastName=action.InputData
            return state=[...state]
        case 'updateUserName':
            state[action.userIndexData][0].userName=action.InputData
            return state=[...state]
        case 'updateEmail':
            state[action.userIndexData][0].email=action.InputData
            return state=[...state]
        case 'updatePassword':
            state[action.userIndexData][1].password=action.InputData
            return state=[...state]
        case 'updateStreet':
            state[action.userIndexData][1].streetAddress=action.InputData
            return state=[...state]
        case 'updateCity':
            state[action.userIndexData][1].city=action.InputData
            return state=[...state]
        case 'updateState':
            state[action.userIndexData][1].state=action.InputData
            return state=[...state]
        case 'updatePostal':
            state[action.userIndexData][1].postal=action.InputData
            return state=[...state]
        case 'updateCountry':
            state[action.userIndexData][1].country=action.InputData
            return state=[...state]
        case 'updateNameOnCard':
            state[action.userIndexData][3].nameOnCard=action.InputData
            return state=[...state]
        case 'updateCredit':
            state[action.userIndexData][3].creditCardNumber=action.InputData
            return state=[...state]
        case 'updateExpMonth':
            state[action.userIndexData][3].expMonth=action.InputData
            return state=[...state]
        case 'updateExpYear':
            state[action.userIndexData][3].expYear=action.InputData
            return state=[...state]
        case 'updateCVV':
            state[action.userIndexData][3].cvv=action.InputData
            return state=[...state]
        case 'updateShipping':
            if (state[action.userIndexData][2].cartSum>=750) {
                state[action.userIndexData][2].shipping=0                
            }
            else{
                state[action.userIndexData][2].shipping=25
            }
            return state=[...state]
        default:
            return state
    }
}

export default addUserReduer;