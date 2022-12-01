import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_01/input";
import { testInput } from "../../../api/2022/day_01/testInput";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/winter_background.png");
`;

const dayOneA = (inputArray: number[]): number => {
  let total = 0;
  let arrayOfTotals = [];
  const totalledArray = inputArray.forEach((num) => {
    if (num === 0) {
      arrayOfTotals.push(total);
      total = 0;
    } else {
      total += num;
    }
  });
  arrayOfTotals.sort((a, b) => a - b);

  console.log(arrayOfTotals);
  let ret = arrayOfTotals[arrayOfTotals.length - 1];

  return ret;
};

const dayOneB = (inputArray: number[]): number => {
  let total = 0;
  let arrayOfTotals = [];
  const totalledArray = inputArray.forEach((num) => {
    if (num === 0) {
      arrayOfTotals.push(total);
      total = 0;
    } else {
      total += num;
    }
  });
  arrayOfTotals.sort((a, b) => a - b);

  console.log(arrayOfTotals);
  let ret =
    arrayOfTotals[arrayOfTotals.length - 1] +
    arrayOfTotals[arrayOfTotals.length - 2] +
    arrayOfTotals[arrayOfTotals.length - 3];

  return ret;
};

const getInput = (): number[] => input.split("\n").map(Number);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 1</h1>
        <h2>Part 1</h2>
        <p>{dayOneA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayOneB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
