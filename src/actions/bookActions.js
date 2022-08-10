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



export const saidbarOpen = (param) =>{
  return{
    type: actionNames.SAIDBAR_OPEN,
    param:param

  }
}
