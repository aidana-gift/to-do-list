
import {createStore} from 'redux'

class Helper{
    //action
const removeTodo = () =>{
    return {
        type: "DELETE"
    };
};

//reducer
const reducer = (state = [], action) => {
    switch(action.type){
        case "DELETE":
            let numIdx = parseInt(action.id)
            return state.filter(todo => todo.id !== numIdx);
        default:
            return state
    }
};

const store = createStore(reducer);

}


//dispath
//store.dispatch(reduce());
export default Helper