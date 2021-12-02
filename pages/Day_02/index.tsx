import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../api/day_02/input";
import { testInput } from "../../api/day_02/testInput";
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
  background-image: url("winter_background.png");
`;

const CalculateAnswerPartOne = () => {
  const rawInput = getInput();
  const horizontalArray: number[] = GetHorizontalValues(rawInput);
  const upArray: number[] = GetUpValues(rawInput);
  const downArray: number[] = GetDownValues(rawInput);
  const horizontal = horizontalArray.reduce(
    (partial_sum, a) => partial_sum + a,
    0
  );
  const up = upArray.reduce((partial_sum, a) => partial_sum + a, 0);
  const down = downArray.reduce((partial_sum, a) => partial_sum + a, 0);
  const answer = (down - up) * horizontal;
  return answer;
};

const CalculateAnswerPartTwo = () => {
  const rawInput = getInput();
  let aim: number = 0;
  let depth: number = 0;
  let horizontal: number = 0;
  rawInput.forEach((instruction) => {
    if (instruction.includes("forward"))
    {
      horizontal += numbersOnly(instruction);
      let depthIncrease  = aim * numbersOnly(instruction);
      depth += depthIncrease; 
    }
    if (instruction.includes("down"))
    {
     aim += numbersOnly(instruction);
    }
    if (instruction.includes("up"))
    {
      aim -= numbersOnly(instruction);
    }
  });
  const answer = horizontal * depth;
  return answer;
};

const getInput = (): string[] => input.split("\n").map(String);

const GetHorizontalValues = (rawInput) => {
  let array = rawInput.filter((str) => str.includes("forward"));
  let numArray: number[] = array.map(numbersOnly);
  return numArray;
};

const GetUpValues = (rawInput) => {
  let array = rawInput.filter((str) => str.includes("up"));
  array = array.map(numbersOnly);
  return array;
};

const GetDownValues = (rawInput) => {
  let array = rawInput.filter((str) => str.includes("down"));
  array = array.map(numbersOnly);
  return array;
};

const numbersOnly = (val) => {
  var num = parseInt(val.replace(/[^0-9]/g, ""));
  return num;
};

export default function Day02() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 02</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 2</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
