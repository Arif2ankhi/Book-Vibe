import { IBook } from '@/type/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar, FaBookOpen } from 'react-icons/fa';

interface IBookCardProps{
    book:IBook;
}
const BookCard = ({book}: IBookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Book Cover */}
      <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-8">

        {/* Category Badge */}
        <span className="absolute left-5 top-5 z-20 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-blue-600 shadow-sm backdrop-blur">
          {book.category}
        </span>

        {/* Year */}
        <span className="absolute right-5 top-5 z-20 rounded-full bg-slate-900/90 px-3 py-1.5 text-xs font-medium text-white">
          {book.yearOfPublishing}
        </span>

        {/* Background Circle */}
        <div className="absolute h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />

        <Image
          src={book.image}
          alt={book.bookName}
          width={220}
          height={280}
          className="relative z-10 h-[260px] w-auto rounded-lg object-cover shadow-2xl transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">

        {/* Rating + Pages */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />

            <span className="font-bold text-slate-700">
              {book.rating}
            </span>

            <span className="text-sm text-slate-400">
              / 5
            </span>
          </div>

          <span className="text-sm text-slate-400">
            {book.totalPages} pages
          </span>

        </div>

        {/* Title */}
        <h2 className="mt-4 line-clamp-1 text-2xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          Written by{" "}
          <span className="font-semibold text-slate-700">
            {book.author}
          </span>
        </p>

        {/* Review */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-slate-100" />

        {/* Bottom Section */}
        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs text-slate-400">
              Published by
            </p>

            <p className="text-sm font-bold text-slate-700">
              {book.publisher}
            </p>
          </div>

          <Link href ={`/books/${book.bookId}`}>

          <button className="btn btn-primary rounded-full px-5 shadow-md transition-all hover:scale-105">
            <FaBookOpen />
            View Details
          </button>
          </Link>

          

        </div>
      </div>
    </div>
    );
};

export default BookCard;