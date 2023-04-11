import React from "react";
import data from "../fiction.json"
import BookCard from "./BookCard";
import Style from "../Style/Fiction.module.css"

// className={Style.}

export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container" class={Style.container}>
        {/* Map all Fictional Books here */}

     
        {
          data.map(el=>
            <BookCard
            img = {el.img}
            title = {el.title}
            author = {el.author}
            price = {el.price}
            year = {el.year}

            />
            )
        }


      </div>
    </div>
  );
}
