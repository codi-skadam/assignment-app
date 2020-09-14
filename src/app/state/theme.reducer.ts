import { createReducer, on } from '@ngrx/store';
import { changetheme } from './theme.actions';
export const initialState = 'Light';
const _themeReducer = createReducer(
  initialState,
  on(changetheme, (state) => {
    if(state === 'Dark') {
      
      return 'Light'
    } else{
      return 'Dark'
    }
  } ),
);

export function themeReducer(state, action) {
  return _themeReducer(state, action);
}
