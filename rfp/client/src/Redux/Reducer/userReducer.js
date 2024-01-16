import { UPDATE_NAME, UPDATE_USER_OBJ } from "../../constants";

const initialValues = {
    email:"",
    password:"",
    userID:"",
    firstName:"",
    lastName:"",
    phone:"",
    age:"",
    gender:"",
    city:"",
    state:"",
    ngoOrSchool:"",
    userObject:"",
}

export const userReducer =  (state = initialValues,action)=>{
    switch (action.type){
        case UPDATE_NAME:
            return{...state,firstName:action.payload};
        case UPDATE_USER_OBJ:
            return{...state,userObject:action.payload};
        default:
            return state;
    }
}