   import React from "react"
   import Style from "../Style/BookCard.module.css"

   export default function BookCard({title,img,author,price,year}) {
  return (
    <div data-testid='book-card' className={Style.book_card} >
        <img src={img} alt={""} />
        <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{author}</div>
        <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}

