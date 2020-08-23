import React from 'react';

import { IState, IRegistrationList, IAction } from './interfaces';

// initial state
const initialState: IState = {
    name: '',
    email: '',
    list: []
}

export const Store = React.createContext<IState | any>(initialState)

// making reducer
const reducer = (state: IState, actions: IAction): IState => {
    switch (actions.type) {
        default:
            return state
    }

}
// making store provider
export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}
