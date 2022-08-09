import * as actionNames from "../actions/actionTypes";

let newId = 0;

// const arr = [
//   { id: 1, name: "Eshmat" },
//   { id: 2, name: "Toshmat" },
//   { id: 3, name: "Turdiali" },
// ];

// const newArr = arr.filter((value, index, arr) => {
//   return value.id !== 2
// });

export const bookReducer = (books = [], bookAction) => {
  switch (bookAction.type) {
    case actionNames.ADD_BOOK:
      return [...books, { ...bookAction.book, id: newId++ }];
    case actionNames.REMOVE_BOOK:
      return books.filter((book) => book.id !== bookAction.idParam);
    default:
      return books;
  }
};
