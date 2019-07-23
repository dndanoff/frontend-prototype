import {ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE} from "action-names.js"


const initialState = {
    employees: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_EMPLOYEE) {
        return Object.assign({}, state, {
            employees: state.employees.concat(action.payload)
        });
    } else if (action.type === UPDATE_EMPLOYEE) {
        return state;
    } else if (action.type === DELETE_EMPLOYEE) {
        return state;
    }
    return state;
};

export {rootReducer};