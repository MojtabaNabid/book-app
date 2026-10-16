import { useState } from "react"

import {books} from "../constants/mockData"
import BookCard from "./BookCard"
import SideCard from "./SideCard";

import styles from "./Books.module.css";


function Books() {

  const [liked, setLiked] = useState([]); //favorite books

  // this function will go down to the BookCard component to get liked book
  const handleLikedList = (book, status) => {
    if(status) { //when status is true, it means the book doesn't liked
      const newLikedList = liked.filter(i => i.id !== book.id)
      setLiked(newLikedList) //updating liked list
    } else {
      setLiked(liked => [...liked, book]) //add this book to favorite books because status is false
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.cards}>
            {books.map((book) => (
            <BookCard key={book.id} data={book} handleLikedList={handleLikedList}/>
            ))}
        </div>

        {/* converting number to boolean with ! sign */}
        {!!liked.length && 
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map(book => <SideCard key={book.id} data={book} />)}
          </div>}
    </div>
  ) 
}

export default Books
