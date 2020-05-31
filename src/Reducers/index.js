import addUserReduer from './addUser'
import ProductsListReducer from './ProductsListReducer'
import isLoggedReducer from './isLogged'
import {combineReducers} from 'redux'
import userIndexReducer from './userIndex'
import animationReducer from './animation'

const allReducers = combineReducers({
    users: addUserReduer,
    isLogged: isLoggedReducer,
    animation: animationReducer,
    userIndex: userIndexReducer,
    ProductList: ProductsListReducer
});

export default allReducers