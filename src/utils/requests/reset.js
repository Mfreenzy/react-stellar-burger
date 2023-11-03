import { POST_PASSWORD_RESET_ENDPOINT } from "../BaseURL";
import { checkResponse } from "../BaseURL";

export const resetPassword = (email) => {
    return fetch(POST_PASSWORD_RESET_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
      })
    })
      .then(res => checkResponse(res));
  };
  
  export function postApiResetPassword(email) {
    resetPassword(email)
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
