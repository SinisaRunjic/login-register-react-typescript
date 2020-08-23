import React from 'react';

import { IState, IAction } from './interfaces';

// initial state
const initialState: IState = {
    name: '',
    email: '',
    list: []
}

export const Store = React.createContext<IState | any>(initialState)

// making reducer
const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                list: action.payload
            }
        case 'LOGIN_USER':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}
// making store provider
export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}
