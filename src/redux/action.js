import { ADD_MV, DELETE_MV, FILTER_MV, SETINP, SETRATE } from "./actionType"

export const del_mv=(idMv)=>{
  return{
    type:DELETE_MV,
    payload:idMv
  }
}

export const fil_mv=(etoile)=>{
return{
  type:FILTER_MV,
  payload:etoile
}
}

export const setrt=(rate)=>{
  return{
    type:SETRATE,
    payload:rate
  }
}

export const set_inp=(inp)=>{
  return{
    type:SETINP,
    payload:inp
  }
}
export const add_mv=(mv)=>{
  return {
    type:ADD_MV,
    payload:mv
  }
}