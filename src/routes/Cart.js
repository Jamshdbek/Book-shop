import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  const books = useSelector((state)=>state.cart)
  return (
    <div>
{
  books.map((book)=>{
    return(

    <div>
     <h3>{book.title}</h3>
     <h3>{book.author}</h3>
     <h3>{book.price}</h3>

    </div>
    )
  })
}

    
    </div>
  )
}

export default Cart