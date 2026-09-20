import React from 'react';
import BookCard from "@/components/shared/BookCard"
// import '../../../../node_modules/daisyui/components/indicator.css';
import { IBook } from '@/type/books.type';


const getBooks = async()=>{
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
  return data;
}


const Books = async() => {

    const booksData = await getBooks();

    console.log(booksData, 'booksData');

    return (
        <section className='container mx-auto my-[70px] px-4'>

    {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
          Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
          Explore All Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover amazing stories, timeless classics, and inspiring books from
          talented authors.
        </p>
      </div>
          
            
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
            booksData.map((book :IBook, ind:number)=> {
                return <BookCard key={ind} book={book}/>
            })
        }

        </div>
        </section>
    );
};

export default Books;
