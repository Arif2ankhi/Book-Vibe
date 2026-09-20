import { IBook } from '@/type/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ILiatedBooksCardProps {
    book: IBook;
}
const ListedBooksCard = ({book}:ILiatedBooksCardProps) => {
    return (
        <div  className="container mx-auto px-4">
          <div className="card lg:card-side bg-base-100 border border-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        
            {/* Book Image */}
            <figure className="lg:w-64 xl:w-72 bg-base-200 p-6 flex-shrink-0">
              <Image
                src={book.image}
                alt={book.bookName}
                width={400}
                height={550}
                className="h-72 lg:h-80 w-full object-contain rounded-lg"
              />
            </figure>
        
            {/* Book Details */}
            <div className="card-body p-6 lg:p-8">
        
              {/* Category + Rating */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="badge badge-primary badge-outline">
                  {book.category}
                </span>
        
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="font-bold">{book.rating}</span>
                  <span className="text-sm text-base-content/50">
                    / 5
                  </span>
                </div>
              </div>
        
              {/* Title */}
              <h2 className="text-2xl lg:text-3xl font-bold mt-2">
                {book.bookName}
              </h2>
        
              {/* Author */}
              <p className="text-base text-base-content/60">
                Written by{" "}
                <span className="font-semibold text-primary">
                  {book.author}
                </span>
              </p>
        
              {/* Review */}
              <p className="text-base text-base-content/70 leading-7 line-clamp-3 mt-3">
                {book.review}
              </p>
        
              {/* Book Information */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        
                <div className="rounded-xl bg-base-200 p-3">
                  <p className="text-xs text-base-content/50">
                    Pages
                  </p>
                  <p className="font-bold text-lg">
                    {book.totalPages}
                  </p>
                </div>
        
                <div className="rounded-xl bg-base-200 p-3">
                  <p className="text-xs text-base-content/50">
                    Published
                  </p>
                  <p className="font-bold text-lg">
                    {book.yearOfPublishing}
                  </p>
                </div>
        
                <div className="rounded-xl bg-base-200 p-3">
                  <p className="text-xs text-base-content/50">
                    Publisher
                  </p>
                  <p className="font-semibold text-sm mt-1">
                    {book.publisher}
                  </p>
                </div>
        
                <div className="rounded-xl bg-base-200 p-3">
                  <p className="text-xs text-base-content/50">
                    Book ID
                  </p>
                  <p className="font-bold text-lg">
                    #{book.bookId}
                  </p>
                </div>
        
              </div>
        
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-ghost"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
        
              {/* Actions */}
              <div className="card-actions justify-end mt-5">
        
                {/* <button className="btn btn-outline">
                  Add to Wishlist
                </button> */}
        
                <Link href= {`/books/${book.bookId}`}>
                <button className="btn btn-primary px-8">
                  View Details
                </button>
                </Link>
        
              </div>
        
            </div>
          </div>
        </div>
    );
};

export default ListedBooksCard;