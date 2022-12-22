import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_09/input";
import { testInput } from "../../../api/2022/day_09/testInput";
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

type Motion = { direction: string; steps: number };

const dayNineA = (inputArray: string[]): number => {
  const motions: Motion[] = [];
  inputArray.forEach((line) => {
    motions.push({ direction: line.split(" ")[0], steps: +line.split(" ")[1] });
  });
  console.log("motions", motions);

  let total = 0;

  return total;
};

const dayNineB = (inputArray: string[]): number => {
  let directions = new Array(inputArray.length);

  let total = 0;

  return total;
};

const getInput = (): string[] => testInput.split("\n").map(String);

export default function Day09() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 09</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 9</h1>
        <h2>Part 1</h2>
        <p>{dayNineA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayNineB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
