import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchDemoJson, fetchDemoJsonThunk, test } from 
const initialState = { value: 0 }

const reduxComponent = () => {

}

function counterReducer (state = initialState, action) {
    if (action.type === 'counter/increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    if (action.type === 'counter/decrement') {
        return {
            ...state,
            value: state.value - 1
        }
    }
    return state
}



export default ButtonExample;