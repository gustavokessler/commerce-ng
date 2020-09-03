import { User } from "../models/auth.models";
import { createReducer, Action, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";

export const authFeatureKey = 'auth';

export interface AuthState {
    user: User,
    authState: {
        loading: boolean;
        error: any;
        authenticated?: boolean;
    }
}

export const initialState: AuthState = ({
    user: {
        uid: null,
        displayName: 'Convidado',
    },
    authState: {
        loading: false,
        error: null,
        authenticated: false,
    },
});

const authReducer = createReducer(
    initialState,
    on(AuthActions.getUser, (state: AuthState) => {
        return { ...state, authState: { ...state.authState, loading: true } };
    })
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return authReducer(state, action);
}