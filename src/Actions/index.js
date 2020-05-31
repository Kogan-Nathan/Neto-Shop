
export const addUser = (first,last,userName,password,email) =>{
    return {
        type: "addUser",
        firstNameData:first,
        LastNameData:last,
        userNameData: userName, 
        passwordData: password, 
        emailData: email
    };
};

export const addNewProduct = (userIndex,productInfo,pricingInfo,imgInfo) =>{
    return {
        type:"addNewProduct",
        userIndexData: userIndex,
        productData: productInfo,
        pricingData:pricingInfo,
        imgData: imgInfo,
        productAmountData: 1
    };
};

export const addExistProduct = (userIndex,productIndex) =>{
    return {
        type:"addExistProduct",
        userIndexData: userIndex,
        productIndexData: productIndex,
    };
};

export const decrementExistProduct = (userIndex,productIndex) =>{
    return {
        type:"decrementExistProduct",
        userIndexData: userIndex,
        productIndexData: productIndex,
    };
};

export const removeProductFromCart = (userIndex,productIndex) =>{
    return {
        type:"removeProductFromCart",
        userIndexData: userIndex,
        productIndexData: productIndex,
    };
};

export const decreaseStock = (productIndex) =>{
    return {
        type:"decreaseInStock",
        productIndexData: productIndex,
    };
};

export const increaseStock = (productIndex) =>{
    return {
        type:"increaseInStock",
        productIndexData: productIndex,
    };
};

export const isLogged = () =>{
    return {
        type:"isLogged"
    };
};

export const isLoggedOut = () =>{
    return {
        type:"isLoggedOut"
    };
};

export const userIndex = (index) =>{
    return {
        type:"newIndex",
        indexData:index
    };
};

export const userIndexReset = (index) =>{
    return {
        type:"resetIndex",
    };
};

export const UpdateFirstName = (userIndex,InputInfo) =>{
    return {
        type:"updateFirstName",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateLasttName = (userIndex,InputInfo) =>{
    return {
        type:"updateLastName",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateUserName = (userIndex,InputInfo) =>{
    return {
        type:"updateUserName",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateEmail = (userIndex,InputInfo) =>{
    return {
        type:"updateEmail",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdatePassword = (userIndex,InputInfo) =>{
    return {
        type:"updatePassword",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateStreet = (userIndex,InputInfo) =>{
    return {
        type:"updateStreet",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateCity = (userIndex,InputInfo) =>{
    return {
        type:"updateCity",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateState = (userIndex,InputInfo) =>{
    return {
        type:"updateState",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdatePostal = (userIndex,InputInfo) =>{
    return {
        type:"updatePostal",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateCountry = (userIndex,InputInfo) =>{
    return {
        type:"updateCountry",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateNameOnCard = (userIndex,InputInfo) =>{
    return {
        type:"updateNameOnCard",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateCredit = (userIndex,InputInfo) =>{
    return {
        type:"updateCredit",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateExpMonth = (userIndex,InputInfo) =>{
    return {
        type:"updateExpMonth",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};
export const UpdateExpYear = (userIndex,InputInfo) =>{
    return {
        type:"updateExpYear",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateCVV = (userIndex,InputInfo) =>{
    return {
        type:"updateCVV",
        userIndexData: userIndex,
        InputData: InputInfo,
    };
};

export const UpdateShipping = (userIndex,shippingPriceInfo) =>{
    return {
        type:"updateShipping",
        userIndexData: userIndex,
        shippingPriceData: shippingPriceInfo,
    };
};

export const animationOn = () =>{
    return {
        type:"animationOn"
    };
};

export const animationOff = () =>{
    return {
        type:"animationOff"
    };
};