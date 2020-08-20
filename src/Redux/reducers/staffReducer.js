import {GET_ALL_STAFF} from '../actions/actionStaff'

const defaultState = {
  staffs:[]
}

export default function staffStore(state = defaultState, action){

  switch(action.type){
    case GET_ALL_STAFF:
      console.log("GET_ALL_STAFF =>", action.staffs)
      return {...state, staffs: action.staffs}
    default: return state
  }
}