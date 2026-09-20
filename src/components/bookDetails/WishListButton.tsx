'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/type/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WsihListButton = ({book}: {book:IBook}) => {

const {wishlist, setWishlist} = useContext(BooksContext);

// console.log(booksProvider , 'booksProvider');

    const handleAddToWishlist =()=> {

        console.log('Wishlist button triggerd', book);

        setWishlist([...wishlist, book])
        toast.success(`You have added "${book.bookName}" to your wishlist`)

    }
    return (
        <button className="btn btn-primary px-8" onClick={()=> handleAddToWishlist ()} >
         Add to Wishlist
        </button>
    );
};

export default WsihListButton;
