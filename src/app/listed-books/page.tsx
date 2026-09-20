'use client';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {

        const {readBooks, wishlist} = useContext(BooksContext);
        console.log(readBooks, wishlist, 'readBooks', 'wishlist');

    return (
        <div>
            Listed Books | Total Read Books :{readBooks.length} <br /> |
             Total Wishlist Books:{wishlist.length}
        </div>
    );
};

export default ListedBooks;