import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_07/input";
import { testInput } from "@api/2021/day_07/testInput";
import styled from "styled-components";
import { useEffect, useState } from "react";

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

const diff = (a, b) => {
  return Math.abs(a - b);
};

const CalculateAnswerPartOne = () => {
  let partOneInput = getInput();
  var max  = Math.max(...partOneInput);
  let fuelCostArray: number[] = Array(max).fill(0);
  for (let fuelCostIndex = 0; fuelCostIndex <= max; fuelCostIndex++) {
    let count = 0;
    partOneInput.forEach((inputNumber) => {
      count += diff(fuelCostIndex, inputNumber);
    });
    fuelCostArray[fuelCostIndex] = count;
  }
  var minimumValue = Math.min(...fuelCostArray);
  const answer = minimumValue;
  return answer;
};

const CalculateAnswerPartTwo = () => {
  let partTwoInput = getInput();
  var max  = Math.max(...partTwoInput);
  let fuelCostArray: number[] = Array(max).fill(0);
  for (let fuelCostIndex = 0; fuelCostIndex <= max; fuelCostIndex++) {
    let count = 0;
    partTwoInput.forEach((inputNumber) => {
      let difference = diff(fuelCostIndex, inputNumber);
      let countUpdated = 0;
      for (let index = 1; index <= difference; index++) {
        countUpdated += index;
      }
      count += countUpdated;
    });
    fuelCostArray[fuelCostIndex] = count;
  }
  var minimumValue = Math.min(...fuelCostArray);
  const answer = minimumValue;
  return answer;
};

const getInput = (): number[] => input.split(",").map(Number);

export default function Day07() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 07</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 7</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
