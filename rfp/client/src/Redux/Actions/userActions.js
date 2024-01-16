import { UPDATE_NAME } from "../../constants"
import { UPDATE_USER_OBJ } from "../../constants"

export const updateUser = (name)=>{
    return {
        type:UPDATE_NAME,
        payload:name
    }
}

export const updateUserObj = (object)=>{
    return {
        type:UPDATE_USER_OBJ,
        payload:object
    }
}
