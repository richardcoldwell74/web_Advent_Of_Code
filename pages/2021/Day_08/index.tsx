import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_08/input";
import { testInput } from "@api/2021/day_08/testInput";
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

const CalculateAnswerPartOne = () => {
  let signals = getSignals();
  let outputs = getOutputs();
  let count = 0;
  outputs.forEach((line) => {
    line.forEach((value) => {
      if (
        value.length === 2 ||
        value.length === 4 ||
        value.length === 3 ||
        value.length === 7
      ) {
        count++;
      }
    });
  });
  const answer = count;
  return answer;
};

const CalculateAnswerPartTwo = () => {
  const answer = 0;
  return answer;
};

const getSignals = () =>
  testInput.split("\n").map((line) => line.split(" ", 10));

const getOutputs = () =>
  input
    .split("\n")
    .map((fullLine) => fullLine.split("| ")[1])
    .map((line) => line.split(" "));

export default function Day08() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 08</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 8</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
