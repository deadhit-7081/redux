const redux = require('redux')
const createStore = redux.createStore
const combineReducers  = redux.combineReducers


const BUY_CAKE = 'BUY_CAKE' //string constant indicating type of action
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action creator is a function that returns an action
function buyCake()
{
    return(
        //action
        {
        type:BUY_CAKE,
        info:'First Redux action'
        }
    )
}

function buyIcecream()
{
    return(
        {
            type:BUY_ICECREAM,
            info :'Icream Sold'
        }
    )
}

//Reducer

const initialCakeState = {
    numofCakes : 10
}
const initialIceCreamState = {
    numofIceCreams : 20
}

const CakeReducer = (state = initialCakeState,action) =>{
    switch(action.type)
    {
        case BUY_CAKE:
            return{
                ...state,//here it makes copy of state object and only modify the numOfCake
                numofCakes : state.numofCakes - 1
            }
        default:
            return state
    }
}
const IceCreamReducer = (state = initialIceCreamState,action) =>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return{
                ...state,
                numofIceCreams : state.numofIceCreams - 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake : CakeReducer,
    iceCream : IceCreamReducer
})

//redux store holding the application state
const store = createStore(rootReducer)
//getState gives the initial state
console.log('Initial State',store.getState())

const unsubscribe = store.subscribe(() => console.log('Update State',store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()