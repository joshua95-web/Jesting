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
  }
