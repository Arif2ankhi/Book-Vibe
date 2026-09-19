
import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-8 md:px-8">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-slate-600 via-blue-50 to-indigo-100 shadow-lg">
        <div className="grid min-h-[450px] items-center md:grid-cols-2">

          {/* Content */}
          <div className="px-6 py-10 text-center md:px-12 md:text-left lg:px-16">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              📚 Discover Your Next Read
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-800 md:text-5xl lg:text-6xl">
              Book a fresh
              <br />
              <span className="text-blue-600">new chapter</span>
              <br />
              for your bookshelf.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favourite read.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button className="btn btn-primary rounded-full px-7 shadow-md">
                View Books →
              </button>

              <button className="btn btn-outline rounded-full px-7">
                Explore More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex rounded-2xl items-end justify-center px-6 md:min-h-[450px]">
            <div className="absolute h-64 w-64 rounded-2xl mb-8 bg-blue-200/50 blur-3xl md:h-80 md:w-80" />

            <Image 
              src={bannerImg}
              alt="Books in  a bookshelf"
              priority
              className="relative z-10 h-auto w-full max-w-md object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

