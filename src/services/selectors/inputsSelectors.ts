import { DefaultRootState } from "../store"

export const selectedInputs = (store:DefaultRootState) => store.inputs
export const selectedUserName = (store:DefaultRootState) => store.inputs.userName
export const selectedPassword = (store:DefaultRootState) => store.inputs.password
export const selectedEmail = (store:DefaultRootState) => store.inputs.email