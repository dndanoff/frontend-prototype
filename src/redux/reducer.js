import {ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE} from "./action-names.js"


const initialState = {
    employees: [
        {
            id: 1,
            firstName: "Denis",
            lastName: "Danov",
            hireDate: null,
            photoUrl: "https://dreamix.eu/images/team/Denis_Danov_Java-Expert.jpg",
            birthDate: "24-04-1991",
            title: {
                id: 1,
                name: "Senior Java developer",
                description: ""
            },
            active: true,
            contacts:[
                {
                    id:1,
                    type:{
                        id: 1,
                        name: "E-MAIL",
                        description: ""
                    },
                    value: "denis.danov@dreamix.eu",
                    priority: 1
                }
            ],
            knownTechnologies:[
                {
                    id: 1,
                    name: "Java",
                    description: ""
                }
            ]
        }
    ]
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