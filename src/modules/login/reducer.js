import { createReducer } from 'typesafe-actions';
import { LOGIN, LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actions";

const initialState = {
    id: '',
    name: '',
    authentication: '',
    state: ''
};

const loginReducer = createReducer(initialState, {
    [LOGIN]: () =>
        ({
            id: '',
            name: '',
            authentication: '',
            state: 'WAITTING'
        }),
    [LOGIN_SUCCESS]: (state, { payload: data }) =>
        ({
            id: data[0],
            name: data[1],
            authentication: data[2],
            state: 'SUCCESS'
        }),
    [LOGIN_FAILURE]: () =>
        ({
            id: '',
            name: '',
            authentication: '',
            state: 'FAILURE'
        }),
    [LOGOUT]: () =>
        ({
            id: '',
            name: '',
            authentication: '',
            state: ''
        })
})

export default loginReducer;