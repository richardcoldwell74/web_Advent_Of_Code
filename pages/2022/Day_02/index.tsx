import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_02/input";
import { testInput } from "../../../api/2022/day_02/testInput";
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

const dayTwoA = (inputArray: number[]): number => {
  let ret = 0;

  return ret;
};

const dayTwoB = (inputArray: number[]): number => {
  let ret = 0;

  return ret;
};

const getInput = (): number[] => input.split("\n").map(Number);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 02</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 2</h1>
        <h2>Part 1</h2>
        <p>{dayTwoA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayTwoB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
