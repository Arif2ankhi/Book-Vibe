import ReadButton from "@/components/bookDetails/ReadButton";
import WsihListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/type/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async() =>{
  try{
     const response = await fetch
  (`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}}/booksData.json`);
   const data = await response.json();
  return data;

  }catch(error){
    console.error('Erroe fetching books data', error);
    return [];
  }
}

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const bookData = await getBooks();
  const book = bookData.find(
    (book: IBook) => String(book.bookId) === String(id)
  ) as IBook;

  console.log(book, "Fron Book details page");

  return (
    <div className="container mx-auto px-4 py-8">
  <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">
    
    {/* Book Image */}
    <figure className="lg:w-2/5 bg-base-200 p-6">
      <Image
        src={book.image}
        alt={book.bookName}
        width={500}
        height={700}
        className="w-full max-h-[600px] object-contain rounded-xl shadow-lg"
      />
    </figure>

    {/* Book Details */}
    <div className="card-body lg:w-3/5 p-6 lg:p-10">

      {/* Category */}
      <div className="flex items-center gap-2 mb-2">
        <span className="badge badge-primary badge-outline">
          {book.category}
        </span>

        <span className="text-sm text-base-content/60">
          Published {book.yearOfPublishing}
        </span>
      </div>

      {/* Book Name */}
      <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
        {book.bookName}
      </h1>

      {/* Author */}
      <p className="text-lg text-base-content/70">
        by{" "}
        <span className="font-semibold text-primary">
          {book.author}
        </span>
      </p>

      {/* Rating */}
      <div className="flex items-center gap-3 mt-3">
        <div className="rating rating-sm">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              checked={Math.round(book.rating) === star}
              readOnly
            />
          ))}
        </div>

        <span className="font-semibold">
          {book.rating} / 5
        </span>
      </div>

      <div className="divider"></div>

      {/* Book Information */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-base-200 rounded-xl p-4">
          <p className="text-sm text-base-content/60">Pages</p>
          <p className="text-xl font-bold">{book.totalPages}</p>
        </div>

        <div className="bg-base-200 rounded-xl p-4">
          <p className="text-sm text-base-content/60">Published</p>
          <p className="text-xl font-bold">{book.yearOfPublishing}</p>
        </div>

        <div className="bg-base-200 rounded-xl p-4">
          <p className="text-sm text-base-content/60">Publisher</p>
          <p className="text-sm font-bold mt-1">
            {book.publisher}
          </p>
        </div>

        <div className="bg-base-200 rounded-xl p-4">
          <p className="text-sm text-base-content/60">Book ID</p>
          <p className="text-xl font-bold">{book.bookId}</p>
        </div>
      </div>

      {/* Review */}
      <div className="mt-5">
        <h3 className="text-xl font-bold mb-2">
          About this book
        </h3>

        <p className="text-base-content/70 leading-7">
          {book.review}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-5">
        <h3 className="font-bold mb-3">Tags</h3>

        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-lg badge-outline badge-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="card-actions justify-end mt-6 gap-3">

        <ReadButton book ={book}/>

        <WsihListButton book={book}/>

        
      </div>

    </div>
  </div>
</div>
  );
};

export default BookDetailsPage;
