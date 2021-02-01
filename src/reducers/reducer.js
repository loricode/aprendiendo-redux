import {GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR} from '../actions/actionTypes'


const initialState = {
    loading:false,
    users:[],
    error:''
}

function reducer (state = initialState, action){
    switch (action.type){
       case GET_USERS:
           return {
               ...state,
               loading: true   
            }
       case GET_USERS_SUCCESS:
          return {
                users:action.payload,
                loading: false,
                error:''   
        }
        case GET_USERS_ERROR:
          return {
                ...state,
                users:[],
                error:action.payload   
        }
        default:
            return {...state }
    }
}

export default reducer;