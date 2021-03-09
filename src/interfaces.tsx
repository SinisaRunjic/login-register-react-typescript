export interface ILoginRegister {
    name: string,
    email: string,
    isLogged: boolean
}

export interface IRegistrationList {
    list: ILoginRegister[]
}

export interface IState extends ILoginRegister, IRegistrationList {

}

export interface IAction {
    type: string,
    payload: any
}