import { createAction, props } from '@ngrx/store';
import { User } from '../models/auth.models';

export const getUser = createAction(
    '[Auth] Get User'
);

export const authenticated = createAction(
    '[Auth] Authenticated',
    props<{payload: User}>(),
);

export const notAuthenticated = createAction(
    '[Auth] Not Authenticated'
);

export const login = createAction(
    '[Auth] Login'
);

export const authError = createAction(
    '[Auth] Login Error',
    props<{payload: any}>() 
);

export const logout = createAction(
    '[Auth] Logout',
);