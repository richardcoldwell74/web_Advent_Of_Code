import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_05/input";
import { testInput } from "../../../api/2022/day_05/testInput";
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

const dataCreation = (inputArray: string[]) => {};

const dayFiveA = (inputArray: string[]): number => {
  dataCreation(inputArray);
  let total = 0;

  return total;
};

const dayFiveB = (inputArray: string[]): number => {
  dataCreation(inputArray);
  let total = 0;

  return total;
};

const getInput = (): string[] => testInput.split("\n").map(String);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 05</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 5</h1>
        <h2>Part 1</h2>
        <p>{dayFiveA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayFiveB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
