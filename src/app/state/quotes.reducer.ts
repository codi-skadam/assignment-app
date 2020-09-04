import { createReducer, on } from '@ngrx/store';
import { addQuote,editQuote,deleteQuote,getQuote } from './quotes.actions';
export const initialState = [{quote:'hi im here',authorName:'im shiv'}];

const _quoteReducer = createReducer(
  initialState,
  on(addQuote, (state,{quoteItem}) => {
    return state.concat(quoteItem);
  }),
  on(getQuote, (state) => state),
  on(editQuote, (state) => state),
  on(deleteQuote, (state,{quoteId}) => {
    console.log(state);
    return state;
  })
);

export function quoteReducer(state, action) {
  return _quoteReducer(state, action);
}
