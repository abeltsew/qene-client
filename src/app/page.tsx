'use client';

import { data } from 'autoprefixer';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault;
    // const res = await fetch('http://localhost:80/', {
    //   method: 'POST',
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    //   body: JSON.stringify({ word }),
    // });

    const res = await axios.post(
      'http://localhost:80/',
      { word },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = res.data;

    setMeaning(result.meaning);
  };

  const renderMeaning = () => {
    return (
      <div className="flex flex-col gap-6 p-10 ">
        <h1>{word}</h1>
        <p>{meaning}</p>
      </div>
    );
  };

  return (
    <div className="relative">
      <img
        className="flex w-full h-[15vh]"
        src="/images/Book.jpg"
        alt="cover"
      />
      <h1 className="absolute top-12 left-8 border-b-yellow-500 border-b-2 w-full ">
        The Online Dictionary
      </h1>
      <div className="flex gap-4 w-4/5 justify-center items-center pt-2">
        <input
          className="text-black"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)} className="">
          Search
        </button>
      </div>
      {meaning && renderMeaning()}
    </div>
  );
}
