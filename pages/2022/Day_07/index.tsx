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

const daySevenA = (inputArray: number[]): number => {
  let ret = 0;

  return ret;
};

const daySevenB = (inputArray: number[]): number => {
  let ret = 0;

  return ret;
};

const getInput = (): number[] => input.split("\n").map(Number);

export default function Day07() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 07</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 1</h1>
        <h2>Part 1</h2>
        <p>{daySevenA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{daySevenB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
