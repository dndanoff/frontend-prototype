import {ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE} from "action-names.js"

const addEmployee = async (payload) => {
    return { type: ADD_EMPLOYEE, payload }
};

const deleteEmployee = async (payload) => {
    return { type: DELETE_EMPLOYEE, payload }
};

const updateEmployee = async (payload) => {
    return { type: UPDATE_EMPLOYEE, payload }
};

export {addEmployee, deleteEmployee, updateEmployee};