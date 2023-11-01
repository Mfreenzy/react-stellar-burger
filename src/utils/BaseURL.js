//Базовая ссылка для запросов к серверу
export const BASE_URL = 'https://norma.nomoreparties.space/api';

//Эндпойнты
export const GET_INGREDIENTS_ENDPOINT = `${BASE_URL}/ingredients`;
export const POST_ORDERS_ENDPOINT = `${BASE_URL}/orders`;
export const POST_PASSWORD_RESET_ENDPOINT = `${BASE_URL}/password-reset`;
export const POST_RESET_ENDPOINT = `${BASE_URL}/password-reset/reset`;
export const POST_REGISTER_ENDPOINT = `${BASE_URL}/auth/register`;
export const POST_LOGIN_ENDPOINT = `${BASE_URL}/auth/login`;
export const POST_LOGOUT_ENDPOINT = `${BASE_URL}/auth/logout`;
export const POST_TOKEN_ENDPOINT = `${BASE_URL}/auth/token`;


//функция checkResponse
export function checkResponse(res) {
    if (res.ok) {
        return res.json();
      } else {
        throw new Error("Request failed");
      }
}