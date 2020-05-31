const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE' //string constant indicating type of action

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

//Reducer
const initialState = {
    numofCakes:10
}

const reducer = (state = initialState,action) =>{
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

//redux store holding the application state
const store = createStore(reducer)
//getState gives the initial state
console.log('Initial State',store.getState())

const unsubscribe = store.subscribe(() => console.log('Update State',store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()