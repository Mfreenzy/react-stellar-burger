import { TUser } from "./types";

export type TRegistration = {
    success: boolean;
    user: TUser;
    accessToken: string;
	refreshToken: string;
}

export type TGetUser = Omit<TRegistration, 'accessToken' | 'refreshToken'>

