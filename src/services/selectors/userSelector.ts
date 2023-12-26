import { DefaultRootState } from "../store";
import { TUser } from "../../types/types";

export const selectUser = (store: DefaultRootState): TUser | null => store.user.user;
export const selectName = (store: DefaultRootState): string | null => store.user.user?.name || null;
export const selectEmail = (store: DefaultRootState): string | null => store.user.user?.email || null;