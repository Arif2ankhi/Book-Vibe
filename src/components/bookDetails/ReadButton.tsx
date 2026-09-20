'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/type/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}: {book:IBook}) => {

const {readBooks, setReadBooks} = useContext(BooksContext);

// console.log(booksProvider , 'booksProvider');

    const handleReadBook =()=> {

        console.log('Read Book button triggerd', book);

        setReadBooks([...readBooks, book])
        toast.success(`You have read "${book.bookName}"`)

    }
    return (
        <button className="btn btn-primary px-8" onClick={()=> handleReadBook()} >
          Read Book
        </button>
    );
};

export default ReadButton;
