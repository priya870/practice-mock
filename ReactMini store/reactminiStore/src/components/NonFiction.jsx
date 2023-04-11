import React from "react";
import data from "../nonfiction.json"
import BookCard from "./BookCard";
import style from "../Style/NonFiction.module.css"

export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container" class = {style.container}>
        {/* Display all Non-Fiction books here */}
        { data.map((el)=>
        <BookCard
        img = {el.img}
        title = {el.title}
        author = {el.author}
        year = {el.year}
        price = {el.price}

        
        />
        )

        
        }
      </div>
    </div>
  );
}
