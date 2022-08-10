import * as actionNames from "../actions/actionTypes";

let newId = 0;





export const bookReducer = (books = [],  bookAction) => {
  switch (bookAction.type) {
    case actionNames.ADD_BOOK:
      return [...books, { ...bookAction.book, id: newId++ }];
    case actionNames.REMOVE_BOOK:
      return books.filter((book) => book.id !== bookAction.idParam);
      case actionNames.BUY_BOOK:
        return   
    default:
      return books;
  }
};
