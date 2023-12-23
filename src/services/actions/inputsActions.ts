export const USER_NAME = "USER_NAME";
export const PASSWORD = "PASSWORD";
export const NEW_PASSWORD = "NEW_PASSWORD";
export const EMAIL = "EMAIL";
export const TOKEN = "TOKEN";

export type addUserAction = {
  type: typeof USER_NAME,
  payload: string;
}

export type addPasswordAction = {
  type: typeof PASSWORD,
  payload: string;
}

export type addEmailAction = {
  type: typeof EMAIL,
  payload: string;
}

export type addNewPasswordAction = {
  type: typeof NEW_PASSWORD,
  payload: string;
}

export type tokenAction = {
  type: typeof TOKEN,
  payload: string;
}

export type TIputsActions = 
    | addUserAction
    | addPasswordAction
    | addEmailAction
    | addNewPasswordAction
    | tokenAction

export function addUser(value:string):addUserAction {
  return { type: USER_NAME, payload: value };
}

export function addPassword(value:string):addPasswordAction {
  return { type: PASSWORD, payload: value };
}

export function addEmail(value:string):addEmailAction {
  return { type: EMAIL, payload: value };
}

export function addNewPassword(value:string):addNewPasswordAction {
  return { type: NEW_PASSWORD, payload: value };
}

export function token(value:string): tokenAction {
  return { type: TOKEN, payload: value };
}
