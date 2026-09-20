"use client";
import BookCard from "@/components/shared/BookCard";
import ListedBooksCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/books.type";
import Image from "next/image";
import { useServerInsertedHTML } from "next/navigation";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  const [sortBy, setSortBy]= useState<"rating" | "pages" | "year">("rating");

//   console.log(readBooks, wishlist, "readBooks", "wishlist");
//   console.log(sortBy, 'sortBy');


  const sortBooks = (books:IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating"){
        sortedBooks.sort((a, b) => b.rating - a.rating)
    }else if(sortBy === "pages"){
        sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
    } else if(sortBy === "year"){
        sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)

  }
  return sortedBooks;
}

  const sortedReadBooks = sortBooks(readBooks)
  const sortedWishlist = sortBooks(wishlist)

  console.log(sortedReadBooks, 'sortedReadBooks');
  console.log(sortedWishlist, 'sortedWishList');

  return (
    <div className="container mx-auto py-[20px]">
      <h2
        className="my-7 bg-amber-100 rounded-3xl py-16 font-bold
             text-4xl text-center"
      >
        Listed Books
      </h2>
      <div className="text-center">
        <select 
        value={sortBy}
        onChange={(e) =>setSortBy(e.target.value as "rating" | "pages" | "year" )}
        defaultValue="Pick a Runtime"
         className="select select-success"
         >
          <option disabled={true}>Sort by</option>
          <option value ={'rating'}>Rating</option>
          <option value ={'pages'}>Number of Pages</option>
          <option value ={'year'}>Published Yeas</option>
        </select>
      </div>
      {/* Tabs added */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className="text-center test-lg font-semibold">
              No read Books Found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => {
              // return <BookCard key={book.bookId} book={book}/>
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className="text-center test-lg font-semibold">
              No wishlist Books Found
            </p>
          )}
        </div>
        {/* </div> */}
      </div>
      Listed Books | Total Read Books :{readBooks.length} <br /> | Total
      Wishlist Books:{wishlist.length}
    </div>
  );
};

export default ListedBooks;
