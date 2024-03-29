"use client";
import Head from "next/head";
import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const subtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };
  const multiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };
  const divide = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };
  return (
    <div className="flex flexbox items-center justify-center flex-col p-5 m-5 gap-4">
      <Head>
        <title>Basic Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-6xl" data-testid="result">
        {result}
      </div>
      <div className="flex flexbox items-center justify-center flex-col p-5 m-5 gap-8 text-black text-4xl">
        <input
          type="number"
          data-testid="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          data-testid="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="bg-orange-800 m-4 p-4 rounded-lg">
        <button onClick={add} data-testid="add">
          Add
        </button>
        <button onClick={subtract} data-testid="subtract">
          Subtract
        </button>
        <button onClick={multiply} data-testid="multiply">
          Multiply
        </button>
        <button onClick={divide} data-testid="divide">
          Divide
        </button>
      </div>
    </div>
  );
}
