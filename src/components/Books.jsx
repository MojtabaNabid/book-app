import { useState } from "react"

import {books as bookData} from "../constants/mockData"

import BookCard from "./BookCard"
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

import styles from "./Books.module.css";
import { use } from "react";


function Books() {
  
  
  const [books, setBooks] = useState(bookData)
  const [liked, setLiked] = useState([]); //favorite books
  const [search, setSearch] = useState([])
  
  
  // this function will go down to the BookCard component to get liked book
  const handleLikedList = (book, status) => {
    //when status is true, it means the book doesn't liked
    if(status) { 
      const newLikedList = liked.filter(i => i.id !== book.id)
      //updating liked list
      setLiked(newLikedList) 
    } else {
      //add this book to favorite books because status is false
      setLiked(liked => [...liked, book]) 
    }
  }

  const searchHandler = () => {
    console.log(search)
    if (search) {
      const newBookList = bookData.filter(book => book.title.toLowerCase().includes(search))
      console.log(newBookList)
      setBooks(newBookList)
    } else {
      setBooks(bookData)
    }
  }

  return (
    <>
      <SearchBox  search={search} setSearch={setSearch} searchHandler={searchHandler}/>
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
    </>
  ) 
}

export default Books
