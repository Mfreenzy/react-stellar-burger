import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { DefaultRootState } from "../services/store";
import { TCurrentIngredientActions } from "../services/actions/currentIngredientActions";
import { TCurrentIngredientsActions } from "../services/actions/currentIngredientsActions";
import { TIngredientActions } from "../services/actions/ingredientActions";
import { TIputsActions } from "../services/actions/inputsActions";
import { TCurrentOrderActions } from "../services/actions/currentOrderActions";
import { TOrderActions } from "../services/actions/orderAction";
import { TUserAction } from "../services/actions/userActions";

export type TAppActions =
    | TCurrentIngredientActions
    | TCurrentIngredientsActions
    | TIngredientActions
    | TIputsActions
    | TCurrentOrderActions
    | TOrderActions
    | TUserAction

export type AppThunk<TReturn = void> = ThunkAction<TReturn, Action, DefaultRootState, TAppActions>;

export type AppDispatch<TReturnType = void> = (action: TAppActions | AppThunk<TReturnType>) => TReturnType;