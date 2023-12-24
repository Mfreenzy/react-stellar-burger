import { POST_TOKEN_ENDPOINT } from "./BaseURL";

type authToken = {
  "success": boolean;
  "accessToken": string;
  "refreshToken": string;
}

const checkResponse = <T>(res: Response):Promise<T> => {
    return res.ok
      ? res.json()
      : res.json().then((err) => Promise.reject(err));
  };

export const refreshToken = (): Promise<authToken> => {
    return fetch(POST_TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    }).then(checkResponse<authToken>);
  };
  
  export const fetchWithRefresh = async <T>(url:string, options: RequestInit):Promise<T> => {
    try {
      const res = await fetch(url, options);
      return await checkResponse<T>(res);
    } catch (err) {
      if (err && typeof err === 'object' && "message" in err) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken(); //обновляем токен
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
        
        // options.headers.authorization = refreshData.accessToken;
        let newOptions: RequestInit = {
          ...options,
          headers: {
            ...options.headers,
            'authorization': refreshData.accessToken,
          },
        };
        const res = await fetch(url, newOptions); //повторяем запрос
        return await checkResponse<T>(res);
      } else {
        return Promise.reject(err);
      }
    } else {
      return Promise.reject(err);
    }
  }
}