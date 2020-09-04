import { createAction,props } from '@ngrx/store';

export const addQuote = createAction('[Count Component] AddQuote',props<{quoteItem:{quote:string,authorName:string}}>());
export const getQuote = createAction('[Count Component] GetQuote');
export const deleteQuote = createAction('[Count Component] DeleteQuote',props<{quoteId:number}>());
export const editQuote = createAction('[Count Component] EditQuote');
