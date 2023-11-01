import { POST_REGISTER_ENDPOINT } from "../BaseURL";
import { checkResponse } from "../BaseURL";

export const getRegister = (name, pass, email) => {
    return fetch(POST_REGISTER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": pass,
        "name": name
      })
    })
      .then(res => checkResponse(res));
  };
  
  export function postApiRegister(name, pass, email) {
    getRegister(name, pass, email)
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

