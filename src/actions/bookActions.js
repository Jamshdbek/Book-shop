import * as actionNames from './actionTypes'

export const addBook = (book) => {
  return {
    type: actionNames.ADD_BOOK,
    book: book
  };
};

export const removeBook = (idParam) => {
  return {
    type: actionNames.REMOVE_BOOK,
    idParam:idParam
  };
}

export const buyBook = (ideParam) =>{
  return{
    type:actionNames.BUY_BOOK,
   book: ideParam
  }
}
