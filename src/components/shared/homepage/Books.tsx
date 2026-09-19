import React from 'react';
import BookCard from '../BookCard';
import '../../../../node_modules/daisyui/components/indicator.css';
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
