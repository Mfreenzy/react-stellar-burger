import { POST_RESET_ENDPOINT } from "../BaseURL";
import { checkResponse } from "../BaseURL";

export const resetPassword = (newPassword, token) => {
    return fetch(POST_RESET_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": newPassword,
        "token": token
      })
    })
      .then(res => checkResponse(res));
  };
  
  export function postApiReset(newPassword, token) {
    resetPassword(newPassword, token)
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }