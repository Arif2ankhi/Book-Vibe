import React from "react";
import BookCard from "../BookCard";
import { IBook } from "@/type/books.type";

export const dynamic = "force-dynamic";

const getBooks = async()=>{
   try{

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`, {cache: 'no-store'}
    );
   const data = await response.json();
  return data;

  }catch(error){
    console.error('Erroe fetching books data', error);
    return [];
  }
}
const Books = async () => {
  const booksData = await getBooks();

  console.log(booksData, "booksData");

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
          Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
          Explore Popular Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover amazing stories, timeless classics, and inspiring books from
          talented authors.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {booksData.slice(0, 9).map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
